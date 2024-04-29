import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './TabScreens/HomeScreen';
import DummyScreen from './TabScreens/DummyScreen';
import { Ionicons } from '@expo/vector-icons';

const BtmTabs = createBottomTabNavigator();

const HomeTab = ({navigation}) => {
  return (
    <BtmTabs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Dashboard') {
          if(iconName = focused){
              return <Ionicons name="home" size={size} color={color} />
          } else{
              return <Ionicons name="home" size={size} color={color} />
          }
      } else if (route.name === 'Saved') {
          if(iconName = focused){
              return <Ionicons name="heart" size={size} color={color} />
          } else{
              return <Ionicons name="heart-half" size={size} color={color} />
          }
      } else if (route.name === 'settings') {
          if(iconName = focused){
              return <Ionicons name="ios-lock-closed" size={size} color={color} />
          } else{
              return <Ionicons name="ios-lock-closed" size={size} color={color} />
          }
      } else if (route.name === 'notifications') {
          if(iconName = focused){
              return <Ionicons name="ios-notifications" size={size} color={color} />
          } else{
              return <Ionicons name="ios-notifications" size={size} color={color} />
          }
      }

      // You can return any component that you like here!
      
      },
      tabBarActiveTintColor: '#C67C4E',
      tabBarInactiveTintColor: 'gray',
      tabBarLabel:()=>null,
      headerTitleAlign:"center"
  })}
    >
      <BtmTabs.Screen name="Dashboard" component={HomeScreen} options={{
                                                                headerTransparent:true
                                                              }}/>
      <BtmTabs.Screen name="Saved" component={DummyScreen}/>
      <BtmTabs.Screen name="settings" component={DummyScreen}/>
      <BtmTabs.Screen name="notifications" component={DummyScreen}/>
    </BtmTabs.Navigator>
  )
}

export default HomeTab

const styles = StyleSheet.create({})