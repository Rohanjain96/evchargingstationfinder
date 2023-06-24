import { View, Text, TouchableHighlight, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import RazorpayCheckout from 'react-native-razorpay';
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { url } from '../constants/url';
import { State } from '../context/StateProvider';
import { CommonActions, StackActions, } from '@react-navigation/native';

const PaymentPage = ({ route, navigation }) => {
  const { price } = route.params
  const { selectedDate, selectedSlots, selectedStation, user, setSelectedSlots, setSelectedDate, setSelectedStation } = State()
  const [token, setToken] = useState(null)

  const bookslot = async (details) => {
    try {
      const config = {
        headers: {
          Authorization: token,
        },
      };

      const { data } = await axios.post(`${url}api/booking/bookSlot`, details, config)
      const resetAction = CommonActions.reset({
        index: 0,
        actions: [
          CommonActions.navigate({ routeName: 'Bookings'})
        ] })
      if (data) {
        navigation.dispatch(resetAction)
      }

    } catch (error) {
      console.log("🚀 ~ file: PaymentPage.jsx:28 ~ bookslot ~ error", error)
      navigation.dispatch(  
        StackActions.replace('Home'))
    }
  }

  const makepayment = () => {
    var options = {
      description: 'Credits towards consultation',
      currency: 'INR',
      key: 'rzp_test_Uj71JGEydhZNLG',
      amount: String(price * 100),
      name: user.user.name,
      prefill: {
        email: 'gaurav.kumar@example.com',
        contact: '9191919191',
        name: 'Gaurav Kumar'
      },
      theme: { color: '#53a20e' }
    }

    RazorpayCheckout.open(options).then((data) => {

      const year = String(new Date().getFullYear())
      const details = {
        stationId: selectedStation.id,
        timeSlots: selectedSlots,
        date: `${selectedDate} ${year}`,
        userId: user.user._id,
        stationAddress: selectedStation.Address,
        stationName: selectedStation.name
      }

      bookslot(details)
      // handle success

    }).catch((error) => {
      console.log("🚀 ~ file: PaymentPage.jsx:66 ~ RazorpayCheckout.open ~ error", error)
      // handle failure
      navigation.navigate("Home")
    })
  }

  useEffect(() => {
    AsyncStorage.getItem("jsonwebtoken").then((result) => {
      if (result !== null) {
        setToken(JSON.parse(result))
      }
    })
      .catch((error) => console.log("🚀 ~ file: PaymentPage.jsx:78 ~ useEffect ~ error", error))
  }, [])

  useEffect(() => {
    makepayment()
  }, [])

  return (
    <View>
    </View>
  )
}

export default PaymentPage