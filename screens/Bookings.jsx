import React,{useState,useEffect} from 'react';
import { View, Text, StyleSheet,FlatList, BackHandler } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import BookingDetails from '../components/BookingDetails';
import axios from 'axios'
import { url } from '../constants/url';
import { Image } from '@rneui/themed';
import { State } from '../context/StateProvider';

const Bookings = ({navigation}) => {
  const [token, setToken] = useState(null)
  const [bookings,setBookings] = useState([])
  const {setSelectedDate,setSelectedSlots,setSelectedStation} = State()

  useEffect(() => {
    const backAction = () => {
      navigation.navigate('Home', { screen: 'UserDetails' })
      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, []);

  const fetchBookings = async() =>{
    try {
      const config = {
        headers: {
          Authorization: token,
        },
      };
      const {data} = await axios.post(`${url}api/booking/fetchAllUserBooking`,{}, config)

      setBookings(data.bookings)
      
    } catch (error) {
      console.log("🚀 ~ file: Bookings.jsx:25 ~ useEffect ~ error", error)
    }
  }
  useEffect(() => {
    AsyncStorage.getItem("jsonwebtoken").then((result) => {
      if (result !== null) {
        setToken(JSON.parse(result))
      }
    })
      .catch((error) => console.log("🚀 ~ file: SplashScreen.jsx:30 ~ useEffect ~ error", error))

      const resetState = () => {
        setSelectedDate("")
        setSelectedSlots([])
        setSelectedStation(null)
      }

      resetState()
  }, [])

  useEffect(()=>{
    if(token!==null)
    fetchBookings()
  },[token])

  return (
    <View style={styles.container}>
        {
          bookings.length > 0 ?
            <FlatList
              data={bookings}
              renderItem={({ item }) => <BookingDetails booking={item} />}
              keyExtractor={item => item._id} /> : 
              <View style={{justifyContent:"center",alignItems:"center",flex:1}}>
                <Image source={require("../assets/No_slot.png")} style={{width:300,height:300}}/>
                <Text style={{fontSize:20}}>No bookings available</Text>
              </View>
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