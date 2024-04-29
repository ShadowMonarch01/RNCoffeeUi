import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { windowWidth } from './Responsive'
import { Ionicons } from '@expo/vector-icons'

const CoffeeCard = ({onPress,image,rating,name,price}) => {
  return (
    <Pressable onPress={onPress} style={styles.cardStyle}>
        <ImageBackground source={image} resizeMode="contain" borderRadius={12} style={styles.cardImage}>
            <View style={styles.ratingWrapper}>
                <Ionicons name="star" color={'orange'} size={16}/>
                <Text style={{fontSize:16,color:'white'}}>{rating}</Text>
            </View>
        </ImageBackground>
        <View style={styles.lowerSection}>
            <Text style={{fontSize:18, color:'black',fontWeight:"500"}}>{name}</Text>
            <Text style={{fontSize:14, color:'gray'}}>with Oat Milk</Text>

            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <Text style={{fontSize:22, fontWeight:"500", color:'#2F4B4E'}}>${price}</Text>

                <TouchableOpacity style={styles.buttonStyle}>
                    <Ionicons name="add" color={"white"} size={20}/>
                </TouchableOpacity>
            </View>
        </View>
    </Pressable>
  )
}

export default CoffeeCard

const styles = StyleSheet.create({
    cardStyle:{
        height:234,
        backgroundColor:'white',
        width:(windowWidth-44)/2,
        borderRadius:12,
        elevation:8,
        marginVertical:2,
        marginHorizontal:1

    },
    cardImage:{
        height:127,
        margin:4,
        backgroundColor:'gray',
        borderRadius:12
    },
    lowerSection:{
        flex:1,
        flexDirection:'column',
        justifyContent:'space-between', 
        // backgroundColor:'blue',
        marginHorizontal:10,
        marginVertical:10
    },
    buttonStyle:{
        backgroundColor:'#C67C4E',
        width:32,
        height:32,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8
    },
    ratingWrapper:{
        flexDirection:'row',
        alignItems:'center',
        margin:6, 
        backgroundColor:'#c0c0c0', 
        width:45,
        opacity:0.7,
        borderTopStartRadius:12,
        borderBottomRightRadius:12
    }
})