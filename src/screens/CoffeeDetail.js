import { ScrollView, StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from 'react-native'
import React,{useState, useEffect} from 'react'
import { Ionicons } from '@expo/vector-icons'
import { longText } from '../components/LgTxt'
import { windowWidth } from '../components/Responsive'
// import { Image as ExpoImage } from 'expo-image'
// import { SvgUri, SvgXml } from 'react-native-svg'
// import { svgImage1 } from '../components/SvgImage1'
const CoffeeDetail = ({navigation, route}) => {

  const {cfeDet} = route.params
  const [showMore,setShowMore] = useState(false)
  const [cfSize, setCfSIze] = useState(3);

  const cfArray = ['S','M','L'];

  useEffect(()=>{
    setCfSIze(3)
  },[])
  return (
    <View style={styles.container}>
      <ScrollView 
        style={styles.scrlStyl}
        showsVerticalScrollIndicator={false}
      >
        <Image style={{
            height:226, 
            marginTop:20,
            backgroundColor:'gray', 
            borderRadius:20,
            width:(windowWidth-40)
          }}
          resizeMode="contain"
          source={cfeDet.image}
        />
        {/* </View> */}

        <View style={{marginTop:20}}>
          <Text style={styles.bigTxt}>{cfeDet.name}</Text>

          <Text style={{fontSize:14, color:'gray', marginVertical:4}}>With Chocolate</Text>

          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            {/* Rating */}
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <Ionicons name="star" color={'#FBBE21'} size={28}/>
              <Text style={{fontSize:22, fontWeight:"500"}}>{cfeDet.rating}</Text>
              <Text style={{fontSize:14, marginTop:4, color:'gray'}}>{'(230)'}</Text>
            </View>

            <View style={{flexDirection:'row', gap:4}}>
              {/* <SvgXml
                width={44}
                height={44}
                xml={svgImage1} 
              /> */}
              <Image
                source={require('../../assets/fyl1.png')}
                style={{width:44, height:44}}
                width={44}
                height={44} 
              />

              <Image  
                source={require('../../assets/fyl2.png')}
                style={{width:44, height:44}}
                width={44}
                height={44} 
              />
            </View>
          </View>

        </View>

        <View style={{marginTop:20, paddingBottom:20}}>
          <Text style={styles.bigTxt}>Description</Text>

          <Text
                numberOfLines={showMore ? 0 : 3}
                style={{fontSize:16, color:'gray'}}
            >{cfeDet.details}</Text>
            <Pressable
             style={{width:90, alignSelf:'flex-end'}}
              onPress = {() =>{
                setShowMore(!showMore)
              }}
            >
                <Text style = {{color: '#c67c4e', fontSize:16}}>{showMore ? "Show Less..." :"Read More..."}</Text>
            </Pressable>


            <Text style={styles.bigTxt}>Size</Text>
            
            <View style={{flexDirection:'row',gap:8, justifyContent:'center', marginTop:20}}>
            {
              cfArray.map((data, index)=>{
                return(
                  <Pressable 
                  key={index}
                style={[styles.coffeeSize,
                      {borderColor: cfSize === index ? '#c67c4e':'#c0c0c0', 
                        backgroundColor: cfSize === index ?'#FFF5EE':'white'}]}
                onPress={()=>setCfSIze(index)}
                >
                  <Text style={{fontSize:24, 
                    fontWeight:"500",
                    color: cfSize === index ? "#c67c4e":"black"
                    }}>{data}</Text>
                </Pressable>
                )
              })
            }
            </View>
      
        </View>



      </ScrollView>
      <View style={styles.btmSection}>
            <View style={{flexDirection:'column', gap:2}}>
              <Text style={{fontSize:16, color:'gray'}}>Price</Text>
              <Text style={{fontSize:22, color:'black'}}>${cfeDet.price}</Text>
            </View>

            <TouchableOpacity
              onPress={()=>navigation.navigate('Order',{cfeDet})} 
              style={styles.button}
            >
              <Text style={{color:'white', fontSize:20}}>Buy Now</Text>
            </TouchableOpacity>
      </View>
    </View>
  )
}

export default CoffeeDetail

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  },
  scrlStyl:{
    flex:1, 
    // backgroundColor:'green', 
    paddingHorizontal:20
  },
  bigTxt:{
    fontSize:24, 
    fontWeight:"500"
  },
  coffeeSize:{
    borderWidth:2, 
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    paddingHorizontal:34,
    paddingVertical:6

  },
  btmSection:{
    height:100,
    // backgroundColor:'gray',
    paddingHorizontal:20,
    flexDirection:'row',
    justifyContent:"space-between",
    alignItems:'center',
  },
  button:{
    width:220,
    height:60,
    backgroundColor:'#c67c4e',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:18
  }
})