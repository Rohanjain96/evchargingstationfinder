import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useIsFocused } from '@react-navigation/native'
import { Image } from '@rneui/base'
import { url } from '../constants/url'
import {State}  from '../context/StateProvider'

const SplashScreen = ({navigation}) => {
  const [token, setToken] = useState(null)
  const focused = useIsFocused()
  const { setUser } = State()
  useEffect(() => {
    AsyncStorage.getItem("jsonwebtoken").then((result) => {
      if (result !== null) {
        navigation.navigate("Home")
      }
    })
      .catch((error) => console.error(error))
  }, [])
  useEffect(() => {
    AsyncStorage.getItem("jsonwebtoken").then((result) => {
      if (result !== null) {
        setToken(JSON.parse(result))
        navigation.navigate("Home")
      }
    })
      .catch((error) => console.error(error))
  }, [focused])
  useEffect(() => { if (token !== null) CheckCredentials() }, [token])

  const CheckCredentials = async () => {
    try {
      const config = {
        headers: {
          Authorization: token,
        },
      };
      const { data } = await axios.get(`${url}api/users/checkcookie`, config)
      if (data) {
        setUser({ type: "changeuser", payload: data });
        setToken(null)
        navigation.navigate("Home")
      }
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <View style={styles.wrapper}>
      <Text style={styles.bigText}>A new way to find electric vehicles charging station</Text>
      <TouchableOpacity onPress={()=>navigation.navigate("Login")} style={styles.button}>
        <Text style={{color:"white"}}>Let's Get Started</Text>
      </TouchableOpacity>
    <Image source={require("../assets/splash.jpeg")} style={{width:300,height:250}} >
    </Image >
    </View>
  )
}
 const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        justifyContent:"center",
        alignItems: "center",
        backgroundColor:"#121621",
        paddingHorizontal:6
    },
    bigText:{
        fontSize:25,
        textAlign:"center",
        color:"white"
    },
    button:{
      marginTop:20,
      borderWidth:1,
      borderColor:"grey",
      paddingVertical:10,
      paddingHorizontal:15,
      borderRadius:20,
      marginBottom:70,
      color:"white"
    }

 })
export default SplashScreen