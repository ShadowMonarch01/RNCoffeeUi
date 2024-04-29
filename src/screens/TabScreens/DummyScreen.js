import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const DummyScreen = () => {
  const url ='https://www.linkedin.com/in/trust-gunn-7ab191255/'
  return (
    <View style={styles.container}>
      <Ionicons name="logo-react" size={80} color="gray" />

      <TouchableOpacity onPress={() => Linking.openURL(url)}>
        <Text style={{fontSize:18, color:'gray'}}>Click to contact me on Linkedin </Text>
      </TouchableOpacity>
    </View>
  )
}

export default DummyScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
        flexDirection:'column',
        gap:8
    }
})