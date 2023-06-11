import { View, Text, TouchableHighlight, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import RazorpayCheckout from 'react-native-razorpay';
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { url } from '../constants/url';
import { State } from '../context/StateProvider';

const PaymentPage = ({ navigation }) => {
  const {selectedDate,selectedSlot,selectedStation,setSelectedStation} = State()
  const makepayment = ()=>{
    var options = {
    description: 'Credits towards consultation',
    image: 'https://i.imgur.com/3g7nmJC.jpg',
    currency: 'INR',
    key: 'rzp_test_Uj71JGEydhZNLG',
    amount: '100',
    name: 'Acme Corp',
    // order_id: 'order_DslnoIgkIDL8Zt',//Replace this with an order_id created using Orders API.
    prefill: {
      email: 'gaurav.kumar@example.com',
      contact: '9191919191',
      name: 'Gaurav Kumar'
    },
    theme: {color: '#53a20e'}
  }
    RazorpayCheckout.open(options).then((data) => {

      const bookslot = async(details) =>{
        console.log(token)
        try {
          const config = {
            headers: {
              Authorization: token,
            },
          };
          const {data} = await axios.post(`${url}api/booking/bookSlot`,{}, config)
          
          console.log("🚀 ~ file: Bookings.jsx:21 ~ fetchBookings ~ data", data.bookings)
    
          setBookings(data.bookings)
          
        } catch (error) {
          console.log("🚀 ~ file: Bookings.jsx:25 ~ useEffect ~ error", error)
        }
      }
      useEffect(() => {
        AsyncStorage.getItem("jsonwebtoken").then((result) => {
          console.log("🚀 ~ file: Bookings.jsx:34 ~ AsyncStorage.getItem ~ result", result)
          if (result !== null) {
            setToken(JSON.parse(result))
          }
        })
          .catch((error) => console.log("🚀 ~ file: SplashScreen.jsx:30 ~ useEffect ~ error", error))
      }, [])
    
      useEffect(()=>{
        const details = {

        }
        bookslot(details)
      },[token])
      // handle success
      navigation.navigate("Bookings")
    }).catch((error) => {
      // handle failure
      navigation.navigate("ShowSlots")
    })
  }

  useEffect(()=>{
    makepayment()
  },[])
  return (
    <View>
    </View>
  )
}

export default PaymentPage