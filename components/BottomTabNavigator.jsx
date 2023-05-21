import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StationList from '../screens/StationList';
import MapScreen from '../screens/MapScreen';
import UserDetails from '../screens/UserDetails';
import Entypo from "react-native-vector-icons/Entypo"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Mapscreen" component={MapScreen} options={{headerShown:false,tabBarIcon:()=>{
        return (<Entypo name='home' size={24} color="grey"/>)
      }}}></Tab.Screen>
      <Tab.Screen name="StationList" component={StationList} options={{headerShown:false,title:"Stations",tabBarIcon:()=>{
        return (<FontAwesome5 name="charging-station" size={24} color="grey"/>)
      }}}></Tab.Screen>
      <Tab.Screen name="UserDetails" component={UserDetails} options={{headerShown:false,title:"User",tabBarIcon:()=>{
        return (<FontAwesome5 name="user" size={24} color="grey"/>)
      }}}></Tab.Screen>
    </Tab.Navigator>
  )
}

export default BottomTabNavigator