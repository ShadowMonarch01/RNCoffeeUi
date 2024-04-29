import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native'
import React,{useEffect, useRef, useState} from 'react'
import { StatusBar } from 'expo-status-bar'
import { Entypo, Feather } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { windowWidth, windowHeight } from '../../components/Responsive'
import CoffeeCard from '../../components/CoffeeCard'
import { coffeeObjects } from '../../CoffeeDetails'

const HomeScreen = ({navigation}) => {
    const CoffeeList = ['Cappuccino', 'Latte', 'Americano', 'Flat White', 'Expresso', 'Caffe macchiato', 'Cartado', 'Caffe mocha', 'Black Coffee', 'Red Eye', 'Lungo'];
    const [idx,setIdx] = useState(0)

    // For auto-swipe images
    const flatListRef = useRef()
    const [activeDot, setActiveDot] = useState(0)

    const slideImages=[
        {
            id:1,
            // image:require('../../../assets/cofee5.jpg'),
            image:require('../../../assets/cofee6.jpg')
        },
        
        {
            id:2,
            // image:require('../../../assets/cofee7.jpg'),
            image:require('../../../assets/cofee9.jpg')
        },
        {
            id:3,
            // image:require('../../../assets/cofee9.jpg'),
            image:require('../../../assets/cofee8.jpg')
        },
    ]

    // Auto scroll
    useEffect(()=>{
        let interval = setInterval(()=>{
            if(activeDot === slideImages.length-1 ){
                flatListRef.current.scrollToIndex({
                    index:0,
                    animation:true
                })
            }else{
                flatListRef.current.scrollToIndex({
                    index:activeDot + 1,
                    animation:true
                })
            }
        },2000)

        return ()=> clearInterval(interval)
    })

    // MUST <-- ITEM LAYOUT
    const getItemLayout=(data,index)=>({
        height: 230,
        length: windowWidth-40,
        offset: (windowWidth-40)*index,
        index:index,
    })

    const renderDotIndicator=()=>{
      return slideImages.map((item,index)=>{
          return <View key={index} 
          style={{
              height:10,width:10, 
              borderRadius:5, 
              backgroundColor: activeDot===index ?'#061023':'white', 
              marginHorizontal:5
          }}></View>
      })
  }

  // handle scroll
  const handleScroll =(event)=>{
    let imageWidth = windowWidth-40

    // The scroll position
    const scrollPosition = event.nativeEvent.contentOffset.x;

    // Get the index of current active item
    const index = scrollPosition/imageWidth;
    // console.log({index})

    setActiveDot(index)
}

  const renderItem =({item})=>{
      return(
          <Image
              source={item.image}
              style={{
                  width:windowWidth-40, 
                  height:160, 
                  borderRadius:14,
                  marginTop:4
              }}
              resizeMode="stretch"
              
          />
      )
  }


  return (
    <View style={styles.container}>
      <LinearGradient
        // Button Linear Gradient
        colors={['rgba(19, 19, 19, 1)', 'rgba(49, 49, 49, 1)']}
        start={{x:0,y:1}}
        end={{x:1,y:0}}
        style={styles.topBgCard}>

            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{flexDirection:'column'}}>
                    <Text style={{color:'gray', fontSize:14, zIndex:4}}>Locatio</Text>

                    <Text style={{color:'white', fontSize:14}}>
                        Bilzen, Taanjungbalai <Entypo name="chevron-small-down" size={24} color="white" /> 
                    </Text>
                </View>

                <Image 
                  source={require('../../../assets/dpimg.png')} 
                  style={{
                    backgroundColor:'gray',width:44, 
                    height:44, borderRadius:8}}
                />
                  {/* </View> */}
            </View>

            <View style={styles.searchContainer}>
                  <View>
                    <Feather name="search" size={24} color="white" />
                  </View>

                  <TextInput
                    underlineColorAndroid="transparent"
                    placeholder='Search items...'
                    placeholderTextColor={"gray"}
                    style={styles.searchInput}
                  />

                  <TouchableOpacity style={styles.filterBtn}>
                    <Image style={styles.filterImg} source={require('../../../assets/filternub.png')}/>
                  </TouchableOpacity>
            </View>     
     </LinearGradient>

     <View style={{paddingHorizontal:20,
      // backgroundColor:'gray',
      height:140}}>
          {/* <Image source={require('../../../assets/cofee9.jpg')} resizeMode="contain" style={{height:150, backgroundColor:'gray',marginTop:-80,borderRadius:12, width:(windowWidth-40)}}/> */}
          {/* Swiping Cards */}
          <View style={styles.swipeCard}>
                <FlatList
                    data={slideImages}
                    ref={flatListRef}
                    getItemLayout={getItemLayout}
                    renderItem={renderItem}
                    horizontal
                    keyExtractor={item=>item.id}
                    pagingEnabled={true}
                    onScroll={handleScroll}
                    showsHorizontalScrollIndicator={false} 
                />
                <View style={{
                    position:"absolute",flexDirection:'row', 
                    justifyContent:'center',alignSelf:'center',
                    bottom:10
                    }}
                >
                    {renderDotIndicator()}
                </View>
            </View>
          {/* </View> */}

          <ScrollView style={{marginVertical:18}} horizontal={true}
              showsHorizontalScrollIndicator={false}
          >
              {
                  CoffeeList.map((item,index)=>{
                      return(
                          <TouchableOpacity key={index}
                              onPress={()=>setIdx(index)} 
                              style={[styles.rowTile,idx===index?{backgroundColor:'#C67C4E'}:{backgroundColor:'white'}]}
                          >
                              <Text style={idx===index?{color:'white'}:{color:'black'}}>{item}</Text>
                          </TouchableOpacity>
                      )
                  })
              }
          </ScrollView>
      </View>

     

     {/* FlatList */}
     <View style={{paddingHorizontal:20}}>
      <FlatList
        data={coffeeObjects}
        keyExtractor={key=>key.name}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={(item)=>{
          return(
            <CoffeeCard
              onPress={()=>navigation.navigate('Detail',{cfeDet:item.item})}
              image={item.item.image}
              rating={item.item.rating}
              name={item.item.name}
              price={item.item.price}
            />
          )
        }}
        style={styles.listHeight}

      />
      {/* Card */}
      {/* <CoffeeCard/> */}
     </View>

     <StatusBar style="light"/>

    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    topBgCard:{
        // height:280,
        height:(windowHeight/2.6),
        width:windowWidth,
        paddingTop:50,
        paddingHorizontal:20
    },
    searchContainer:{
        marginVertical:30,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#313131',
        paddingHorizontal:10,
        borderRadius:10
      },
      searchInput:{
        flex:1,
        marginHorizontal:6,
        color:'white',
      },
      filterImg:{},
      filterBtn:{
        width:47,
        height:43,
        backgroundColor:'#C67C4E',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8
      },

      rowTile:{
        paddingHorizontal:8,
        paddingVertical:8,
        marginHorizontal: 6,  
        borderRadius:4
    },
    listHeight:{
      height: windowHeight -((windowHeight/2.6) -(-140-30)),
      paddingBottom:70
    },
    swipeCard:{
      marginTop:-100,
      // backgroundColor:'gray', 
      width:"100%", height:170,
      // marginVertical:20,
      // borderRadius:14
  },
    
})