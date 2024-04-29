import { Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React,{useState} from 'react'
import { windowWidth } from '../components/Responsive'
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons'


const CoffeeOrder = ({navigation, route}) => {

  const {cfeDet} = route.params

  const [odType, setOdType] = useState(0)

  const orderType = ['Delivery', 'Pick Up'];

  const SumComponent =({leftData, rightData, sumSTyle})=>{
    return(
      <View style={[{flexDirection:'row', justifyContent:'space-between', marginVertical:10},sumSTyle]}>
        <Text style={{fontSize:18,fontWeight:"300"}}>{leftData}</Text>
        <Text style={{fontSize:18,fontWeight:"600"}}>{rightData}</Text>
      </View>
    )
  }

  const LittleButton =({image,text})=>{
    return(
      <TouchableOpacity style={styles.littleBtns}>
        <Image width={14} height={14} source={image} />
        <Text>{text}</Text>
      </TouchableOpacity>
    )
  }

  const CoffeeIcon =({name,onPress})=>{
    return(
      <TouchableOpacity
        onPress={onPress} 
        style={{width:24, height:24, marginTop:4}}
      >
        <SimpleLineIcons 
          name={name} 
          size={24} 
          color="black" 
        />
      </TouchableOpacity>
    )
  }

  // require('../../assets/edit.png')

  return (
    <View style={{flex:1}}>
      <ScrollView style={{flex:1, paddingHorizontal:20,paddingVertical:10, backgroundColor:'white'}}>
        {/* Delivery type */}
        <View style={styles.orderTypeWrapper}>
          {
            orderType.map((data, index)=>{
              return(
                <Pressable 
                  key={index}
                  onPress={()=>{
                    setOdType(index)
                    // other instructions
                  }} 
                  style={[styles.dlvBtn,{backgroundColor: odType === index ? '#c67c4e':'#F2F2F2'}]}>
                  <Text style={{fontSize:20, color: odType === index ?'white':'black'}}>{data}</Text>
                </Pressable>
              )
            })
          }
        </View>

        <View style={{}}>
          <Text style={styles.bigTxt}> Delivery Addrress</Text>

          <Text style={{fontSize:16, fontWeight:"400"}}>JI. Kpg Sutoyo</Text>
          <Text style={{color:'gray', fontSize:14}}>Kpg SUtoya No.620, Bilzen, Tanjungbalai</Text>

          <View style={{flexDirection:'row',gap:8}}>
            <LittleButton
              text={'Edit-Address'}
              image={require('../../assets/edit.png')} 
            />

            <LittleButton
              text={'Add Note'}
              image={require('../../assets/note.png')} 
            />
          </View>
        </View>

          {/* Elevated Card */}
        <View style={[styles.orderCountCard, styles.shadowSt]}>

          {/* Image Section */}
          <View style={{flexDirection:'row', gap:4}}>
            <Image 
              style={{
                width:50, 
                margin:2, 
                borderRadius:12, 
                backgroundColor:'gray', 
                height:50,
              }}
              source={cfeDet.image}
              resizeMode="contain"
            />
            {/* </View> */}

            <View style={{flexDirection:'column', justifyContent:'center' }}>
              <Text style={styles.bigTxt}>{cfeDet.name}</Text>
              <Text style={{fontSize:14, color:'gray'}}>With Chocolates</Text>
            </View>
            
          </View>

          <View style={{flexDirection:'row',marginTop:10,gap:10, paddingRight:10}}>
            <CoffeeIcon
              name={'minus'}
            />
            <Text style={{fontSize:24, color:'black'}}>1</Text>
            <CoffeeIcon
              name={'plus'}
            />
          </View>

        </View>

        {/* Discount Card*/}
        <View style={[styles.disCountCard, styles.shadowSt]}>
          <View style={{flexDirection:'row',alignItems:'center',gap:2}}>
            <Image 
              width={24} 
              height={24} 
              source={require('../../assets/Discount.png')}
            />
            <Text 
              style={{fontSize:18,color:'black', fontWeight:"400"}}>
                1 DIscount is applied
              </Text>
          </View>

          <Ionicons name="chevron-forward" color={"black"} size={24}/>
        </View>

        {/* SUmmary */}
        <View>
          <Text style={styles.bigTxt}>Payment Summary</Text>

          <SumComponent
            leftData={'Price'}
            rightData={'$4.53'}
          />

          <SumComponent
            leftData={'Delivery Fee'}
            rightData={'$1.0'}
          />

          <SumComponent
            leftData={'Total Payment'}
            rightData={'$5.53'}
            sumSTyle={{
              marginTop:20
            }}
          />
        </View>

      </ScrollView>
      <View style={styles.btmSection}>
        {/* ABove Button */}
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>

          <View style={{flexDirection:'row', gap:4}}>
            <Image source={require('../../assets/moneys.png')}/>

            <View style={{backgroundColor:'#c67c4e', width:50, paddingVertical:2, alignItems:'center', borderRadius:10}}>
              <Text style={{fontSize:14, color:'white'}}>Cash</Text>
            </View>

            <Text style={{backgroundColor:'#c0c0c0', paddingHorizontal:8, borderRadius:10,}}>
              $5.53
            </Text>
          </View>

          <TouchableOpacity>
            <Image source={require('../../assets/dots.png')}/>
          </TouchableOpacity>

        </View>

        <TouchableOpacity style={styles.buTTon}
          onPress={()=>navigation.navigate('Track')}
        >
          <Text style={{color:'white', fontSize:24}}>Order</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default CoffeeOrder

const styles = StyleSheet.create({
  btmSection:{
    flexDirection:'column',
    height:120,
    backgroundColor:'white',
    paddingHorizontal:20,
    paddingVertical:10,
    gap:4
  },
  buTTon:{
    height:62, 
    width:320, 
    backgroundColor:'#c67c4e', 
    alignItems:'center', 
    justifyContent:'center', 
    alignSelf:'center',
    borderRadius:20
  },
  orderTypeWrapper:{
    height:50, 
    backgroundColor:'#F2F2F2', 
    flexDirection:'row', 
    gap:2, 
    borderRadius:10, 
    justifyContent:'center', 
    alignItems:'center'
  },
  bigTxt:{
    fontSize:20, 
    color:'black', 
    fontWeight:"400"
  },
  dlvBtn:{
    width:(windowWidth-50)/2,
    height:46,
    backgroundColor:'#c67c4e',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10
  },
  littleBtns:{
    flexDirection:'row',
    gap:4,
    alignItems:'center',
    borderWidth:1, 
    marginTop:10, 
    width:120, 
    paddingVertical:4,
    justifyContent:'center', 
    borderRadius:10,
    borderColor:'#c0c0c0'
  },
  disCountCard:{
    marginVertical:40,
    backgroundColor:'white',
    flexDirection:'row',
    marginHorizontal:10,
    paddingHorizontal:4,
    height:58,
    justifyContent:'space-between',
    alignItems:'center',
  },
  orderCountCard:{
    height:56,
    paddingVertical:2, 
    marginTop:30,
    backgroundColor:"white", 
    flexDirection:'row',
    justifyContent:'space-between'
  },
  shadowSt:{
    shadowColor: "#000",
    borderRadius:10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  }
})