import { View, Text, TouchableHighlight, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import RazorpayCheckout from 'react-native-razorpay';

const PaymentPage = () => {
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
      // handle success
      alert(`Success: ${data.razorpay_payment_id}`);
    }).catch((error) => {
      // handle failure
      console.log(error)
      alert(`Error: ${error.code} | ${error.description}`);
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