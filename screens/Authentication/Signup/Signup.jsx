
import { Button } from '@rneui/themed'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import KeyboardAvoidingWrapper from '../../../components/KeyboardAvoidingWrapper'
import * as yup from "yup"
import axios from 'axios'
import { State } from '../../../context/StateProvider'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { url } from '../../../constants/urls'
import Ionicons from "react-native-vector-icons/Ionicons"
import Entypo from "react-native-vector-icons/Entypo"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Fontisto from "react-native-vector-icons/Fontisto"


const Signup = ({ navigation }) => {
  const ReviewSchema = yup.object({
    username: yup.string().required("Please enter your username").min(3, "Name must be of atleast 3 characters"),
    phone: yup.number().min(10, "Phone number must be of length 10").required("Please enter a phone number"),
    password: yup.string().required('Please Enter your password').matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
    email: yup.string().email("Please enter a valid email address").required("Please enter a valid email address"),
    confirmPassword: yup.string().required('Please Enter your password').oneOf([yup.ref("password"), null], "Password and confirm password must match")
  })
  const { setUser } = State()
  return (
    <Formik
      initialValues={{
        username: "",
        phone: "",
        password: "",
        confirmPassword: "",
        email: ""
      }}
      validationSchema={ReviewSchema}
      enableReinitialize
      onSubmit={async (values, { resetForm }) => {
        try {
          const config = {
            headers: {
              "Content-type": "application/json",
            },
          };
          const { data } = await axios.post(`${url}api/users/register`, values, config)
          if (data) {
            setUser({ type: "changeuser", payload: data });
            AsyncStorage.setItem("jsonwebtoken", JSON.stringify(data.token)).then(navigation.navigate("MainScreen"))
              .catch((error) => console.log("🚀 ~ file: Signup.jsx:53 ~ onSubmit={ ~ error", error))
          }
        } catch (error) {
          console.log("🚀 ~ file: Signup.jsx:55 ~ onSubmit={ ~ error", error)
        }
        resetForm({
          username: "",
          phone: "",
          password: "",
          confirmPassword: ""
        })
        console.log(values)
      }}
    >
      {(props) => (

        <KeyboardAvoidingWrapper>
          <ImageBackground source={{uri:"https://i.redd.it/k35gae3somo41.png"}} style={styles.container}>
            <View style={styles.form}>
              <Text style={styles.heading}>Register</Text>
              <Text style={styles.text}>Create your account</Text>
              <View style={styles.formbox}>
                <View style={styles.forminput}>
                  <Ionicons name="person" size={24} color="white" />
                  <TextInput style={styles.input}
                    placeholder="Enter your Username"
                    placeholderTextColor={"white"}
                    onChangeText={props.handleChange("username")}
                    onBlur={props.handleBlur("username")}
                    value={props.values.username} />
                </View>
                <Text style={styles.errors}>{props.touched.username && props.errors.username}</Text>
              </View>
              <View style={styles.formbox}>
                <View style={styles.forminput}>
                  <Entypo name="phone" size={24} color="white" />
                  <TextInput style={styles.input}
                    placeholder="Enter your Phone number"
                    placeholderTextColor={"white"}
                    onChangeText={props.handleChange("phone")}
                    onBlur={props.handleBlur("phone")}
                    value={props.values.phone}
                    maxLength={10}
                    keyboardType={"numeric"} />
                </View>
                <Text style={styles.errors}>{props.touched.phone && props.errors.phone}</Text>
              </View>
              <View style={styles.formbox}>
                <View style={styles.forminput}>
                  <MaterialCommunityIcons name="email" size={24} color="white" />
                  <TextInput style={styles.input}
                    placeholder="Enter your email"
                    placeholderTextColor={"white"}
                    onChangeText={props.handleChange("email")}
                    onBlur={props.handleBlur("email")}
                    value={props.values.email}
                  />
                </View>
                <Text style={styles.errors}>{props.touched.email && props.errors.email}</Text>
              </View>
              <View style={styles.formbox}>
                <View style={styles.forminput}>
                  <Fontisto name="locked" size={24} color="white" />
                  <TextInput style={styles.input}
                    placeholder="Enter your Password"
                    secureTextEntry={true}
                    placeholderTextColor={"white"}
                    onChangeText={props.handleChange("password")}
                    onBlur={props.handleBlur("password")}
                    value={props.values.password} />
                </View>
                <Text style={styles.errors}>{props.touched.password && props.errors.password}</Text>
              </View>
              <View style={styles.formbox}>
                <View style={styles.forminput}>
                  <Fontisto name="locked" size={24} color="white" />
                  <TextInput style={styles.input}
                    placeholder="Enter Confirm Password"
                    placeholderTextColor={"white"}
                    secureTextEntry={true}
                    onChangeText={props.handleChange("confirmPassword")}
                    onBlur={props.handleBlur("confirmPassword")}
                    value={props.values.confirmPassword} />
                </View>
                <Text style={styles.errors}>{props.touched.confirmPassword && props.errors.confirmPassword}</Text>
              </View>
              <TouchableOpacity style={styles.button} onPress={props.handleSubmit}>
                <Text >Sign Up</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Login")}>
                <Text style={{ marginTop: 10, color: "white" }} >Already have an account? Login</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground >
        </KeyboardAvoidingWrapper>
      )}
    </Formik>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 40,
    color: 'white'
  },
  form: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 50,
    paddingHorizontal: 15
  },
  formbox: {
    width: "100%"
  },
  text:{
    fontSize: 18,
    color:"white",
    marginBottom:30
  },
  forminput: {
    position: "relative",
    width: "100%",
    flexDirection: "row",
    borderColor: 'white',
    padding: 5,
    paddingLeft: 10,
    borderWidth: 2,
    borderRadius: 6,
    alignItems: "center",
  },
  input: {
    position: "relative",
    height: 40,
    color: "white",
    marginLeft: 15
  },
  button:{
    backgroundColor:"#45F3FF",
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
    paddingVertical:10
  },
  errors: {
    color: "red",
    textAlign:"center",
    marginBottom: 10,
  }
});
export default Signup