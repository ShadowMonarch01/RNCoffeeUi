import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from './screens/SplashScreen'
import HomeTab from './screens/HomeTab'
import CoffeeDetail from './screens/CoffeeDetail'
import CoffeeOrder from './screens/CoffeeOrder'
import MapTrack from './screens/MapTrack'
import { Ionicons } from '@expo/vector-icons'
import OtoInput from './OtpInput/OtoInput'

const Stack = createStackNavigator()
const StackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackImage:()=>{
          return(
            <View>
              <Ionicons name="chevron-back-sharp" size={24} color="black" />
            </View>
          )
        },
        headerTitleAlign:"center",
        headerStyle:{
          // elevation:0
          backgroundColor:'white'
        }
      }}
    >
        {/* <Stack.Screen name='Otp' component={OtoInput} options={{
                                                                    headerShown:false
                                                                }}/> */}
        <Stack.Screen name='Splash' component={SplashScreen} options={{
                                                                    headerShown:false
                                                                }}/>
        <Stack.Screen name='Home' component={HomeTab} options={{
                                                                    headerShown:false
                                                                }}/>
        <Stack.Screen name='Detail' component={CoffeeDetail} options={{
                                                                        headerRight:()=>(
                                                                          <View style={{marginRight:18}}>
                                                                            <Ionicons 
                                                                              name="heart-outline" 
                                                                              color={"black"} 
                                                                              size={24}
                                                                            />
                                                                          </View>
                                                                        )
                                                                    }}/>
        <Stack.Screen name='Order' component={CoffeeOrder}/>
        <Stack.Screen name='Track' component={MapTrack}options={{
                                                                    headerShown:false
                                                                }}/>
    </Stack.Navigator>
  )
}

export default StackScreen

const styles = StyleSheet.create({})