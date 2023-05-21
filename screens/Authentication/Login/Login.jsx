import { Button } from '@rneui/themed'
import React from 'react'
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import * as yup from "yup"
import { Formik } from 'formik'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect } from 'react'
import { useState } from 'react'
import { State } from '../../../context/StateProvider'
import { useIsFocused } from '@react-navigation/native'
import KeyboardAvoidingWrapper from '../../../components/KeyboardAvoidingWrapper'
import Icon from 'react-native-vector-icons/Ionicons';
import { url } from '../../../constants/url'

const Login = ({ navigation }) => {
  const [token, setToken] = useState(null)
  const focused = useIsFocused()
  const { setUser } = State()
  const loginSchema = yup.object().shape({
    password: yup.string().required("Please enter your password"),
    phone: yup.number().required("Phone number is must")
  })

  useEffect(() => {
    AsyncStorage.getItem("jsonwebtoken").then((result) => {
      if (result !== null) {
        setToken(JSON.parse(result))
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

    <Formik
      initialValues={{
        phone: "",
        password: ""
      }}
      enableReinitialize
      validationSchema={loginSchema}
      onSubmit={async (values, { resetForm }) => {
        try {
          const config = {
            headers: {
              "Content-type": "application/json",
            },
          };
          const { data } = await axios.post(`${url}api/users/login`, values, config)
          if (data) {
            setUser({ type: "changeuser", payload: data });
            AsyncStorage.setItem("jsonwebtoken", JSON.stringify(data.token)).then(navigation.navigate("Home"))
              .catch((error) => console.error(error))
          }
        } catch (error) {
          console.error(error)
        }
        resetForm({
          phone: "",
          password: ""
        })
      }}
    >
      {(props) => (

        <KeyboardAvoidingWrapper>
          <ImageBackground source={{uri:"https://i.redd.it/k35gae3somo41.png"}} style={styles.container}>
            <View style={styles.form}>
              <Text style={styles.heading}>Welcome Back</Text>
              <Text style={styles.text}>Login to your account</Text>
              <View style={styles.formbox}>
                <View style={styles.forminput}>
                <Icon name="person" size={24} color="white" />
                <TextInput style={styles.input}
                  placeholder="Enter your Phone number"
                  keyboardType={"numeric"}
                  placeholderTextColor={"white"}
                  onChangeText={props.handleChange("phone")}
                  onBlur={props.handleBlur("phone")}
                  maxLength={10}
                  value={props.values.phone} />
                </View>
                <Text style={styles.errors}>{props.touched.phone && props.errors.phone}</Text>
              </View>
              <View style={styles.formbox}>
                <View style={styles.forminput}>
                <Icon name="lock-closed-sharp" size={24} color="white" />
                <TextInput style={styles.input}
                  placeholder="Enter your Password"
                  placeholderTextColor={"white"}
                  secureTextEntry={true}
                  onChangeText={props.handleChange("password")}
                  onBlur={props.handleBlur("password")}
                  value={props.values.password} />
                </View>
                <Text style={styles.errors}>{props.touched.password && props.errors.password}</Text>
              </View>
              <Button
                containerStyle={{
                  width: "100%",
                  marginTop: 70,

                }}
                buttonStyle={{ backgroundColor: '#45F3FF' }} onPress={props.handleSubmit}>Login</Button>
              <TouchableOpacity
                onPress={() => navigation.navigate("Signup")}>
                <Text style={{ marginTop: 10, color: "white" }} >Not a member? Create Account</Text>
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
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 38,
    color: 'white',
    fontFamily:"JosefinSans-VariableFont_wght"
  },
  text:{
    fontSize: 18,
    color:"white",
    marginBottom:50
  },
  form: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 50,
    paddingHorizontal: 25
  },
  formbox:{
    width:"100%"
  },
  forminput: {
    position: "relative",
    width: "100%",
    flexDirection:"row",
    borderColor: 'white',
    padding:5,
    paddingLeft:10,
    borderWidth: 2,
    borderRadius:6,
    alignItems:"center",
  },
  input: {
    position: "relative",
    height: 40,
    color: "#45f3ff",
    marginLeft: 10
  },
  errors: {
    color: "red",
    marginBottom: 10,
    textAlign:"center"
  }
});

export default Login
