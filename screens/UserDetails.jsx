import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Avatar, Button } from '@rneui/themed'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { State } from '../context/StateProvider'
import { StyleSheet } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign"
import { capatilize } from '../utils/utils'

const UserDetails = ({ navigation }) => {
  const { user } = State()

  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Avatar source={{ uri: user.user.pic }} rounded size={130} />
        <Text style={styles.name}>{capatilize(user.user.name)}</Text>
        <Text style={styles.name}>{user.user.email}</Text>
      </View>
      <View style={styles.menu}>
        <View style={styles.options}>
          <TouchableOpacity onPress={() => navigation.navigate("UserProfile")}>
            <View style={styles.option}>
              <Text style={{ fontSize: 18 }}>View Profile</Text>
              <AntDesign name='right' size={24} color="grey" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Bookings")}>
            <View style={styles.option}>
              <Text style={{ fontSize: 18 }}>All Bookings</Text>
              <AntDesign name='right' size={24} color="grey" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Button
        buttonStyle={{ marginTop: 10, marginHorizontal:10}}
        style={styles.button}
        onPress={() => AsyncStorage.removeItem("jsonwebtoken"
        ).then(() => navigation.navigate("Login"))
          .catch((error) => { console.log("🚀 ~ file: UserDetails.jsx:11 ~ UserDetails ~ error", error) })}
      >
        Logout</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    padding: 10,
    width: "100%",
    flex: 1
  },
  details: {
    alignItems: "center",
  },
  name: {
    marginTop: 10,
    fontSize: 25,
  },
  menu: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    marginTop: 80
  },
  options: {
    height: "100%"
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    width: "100%",
    padding: 10
  },
})
export default UserDetails