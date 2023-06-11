import React,{useState,useEffect} from 'react';
import { View, Text, StyleSheet,FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useIsFocused } from '@react-navigation/native'
import BookingDetails from '../components/BookingDetails';
import axios from 'axios'
import { url } from '../constants/url';

const Bookings = () => {
  const [token, setToken] = useState(null)
  const [bookings,setBookings] = useState([])
  const focused = useIsFocused()

  const fetchBookings = async() =>{
    console.log(token)
    try {
      const config = {
        headers: {
          Authorization: token,
        },
      };
      const {data} = await axios.post(`${url}api/booking/fetchAllUserBooking`,{}, config)
      
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
    fetchBookings()
  },[token])

  return (
    <View style={styles.container}>
        {
          bookings.length > 0 ?
            <FlatList
              data={bookings}
              renderItem={({ item }) => <BookingDetails booking={item} />}
              keyExtractor={item => item._id} /> : ""
        }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    marginBottom: 24,
  },
  stationName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  stationAddress: {
    fontSize: 16,
    color: '#888',
  },
  section: {
    marginBottom: 24,
  },
  sectionLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  timeSlotContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
  },
  timeSlotText: {
    fontSize: 14,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default Bookings