import { View, Text } from 'react-native'
import React from 'react'
import { Button } from '@rneui/themed'
import AsyncStorage from '@react-native-async-storage/async-storage'

const UserDetails = ({navigation}) => {
  return (
    <View>
      <Text>UserDetails</Text>
      <Button onPress={()=>AsyncStorage.removeItem("jsonwebtoken").then(() => navigation.navigate("Login")).catch((error) => { console.error(error) })}>Logout</Button>
    </View>
  )
}

export default UserDetails