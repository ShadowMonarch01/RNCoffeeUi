import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { windowWidth,windowHeight } from '../components/Responsive'


const SplashScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/bigCoffeeimg.png')} style={styles.bigImage}/>

      <View style={{flexDirection:'column', alignItems:'center', gap:4}}>
        <Text style={styles.bigText}>{'Coffee so good,\n your taste buds\n will love it.'}</Text>

        <Text style={{textAlign:'center', color:'gray'}}>{'The best grain, the finest roast, the\n powerful flavor'}</Text>

        <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={styles.button}>
          <Text style={{color:'white', fontSize:18}}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black'
  },
  bigImage:{
    width:windowWidth,
    height:(windowHeight/2)+140
  },
  bigText:{
    textAlign:'center',
    fontSize:30,
    marginTop:-44,
    fontWeight:"500",
    color:'white'
  },
  button:{
    width:315,
    height:62,
    backgroundColor:'#C67C4E',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:18
  }
})