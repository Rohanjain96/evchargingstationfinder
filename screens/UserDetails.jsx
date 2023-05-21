import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Avatar, Button } from '@rneui/themed'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { State } from '../context/StateProvider'
import { StyleSheet } from 'react-native'
import { capatilize } from '../utils/utils'

const UserDetails = ({ navigation }) => {
  const { user } = State()
  console.log("🚀 ~ file: UserDetails.jsx:10 ~ UserDetails ~ user", user)
  
  return (
    <View style={styles.container}>
      <View style={styles.details}>
      <Avatar source={{ uri: user.user.pic }} rounded size={130} />
      <Text style={styles.name}>{capatilize(user.user.name)}</Text>
      </View>
      <TouchableOpacity  onPress={() => navigation.navigate("UserProfile")}>
        <View style={styles.option}>
        <Text >View Profile</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Bookings")}>
        <Text style={styles.option}>All Bookings</Text>
      </TouchableOpacity>
      <Button buttonStyle={{marginTop:10}} style={styles.button} onPress={() => AsyncStorage.removeItem("jsonwebtoken").then(() => navigation.navigate("Login")).catch((error) => { console.log("🚀 ~ file: UserDetails.jsx:11 ~ UserDetails ~ error", error) })}>Logout</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    padding:10,
    width:"100%"
  },
  details:{
    alignItems: "center",
  },
  name:{
    marginTop:10,
    fontSize:25
  },
  option:{
    flexDirection:"row",
    marginTop:10,
    backgroundColor:"gray",
    width:"100%",
    padding: 10
  },
})
export default UserDetails