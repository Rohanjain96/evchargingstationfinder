import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { State } from '../context/StateProvider'
import { Button } from '@rneui/themed'
import FontAwesome from "react-native-vector-icons/FontAwesome"
import AntDesign from "react-native-vector-icons/AntDesign"
import { giveCompleteTime } from '../utils/utils'
import { StackActions } from '@react-navigation/native'
import RazorpayCheckout from 'react-native-razorpay';
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { url } from '../constants/url';

const ShowEstimatePriceScreen = ({ route, navigation }) => {
    const { chargerDetails, units, minutes, advanceBooking = false } = route.params
    const { selectedSlots, selectedStation, user, selectedDate } = State()
    const [price, setPrice] = useState(null)

    const calculatePrice = () => {
        return units ? units * chargerDetails.cost_per_unit : (minutes * chargerDetails.cost_per_min) / chargerDetails.minutes
    }

    const bookslot = async (details) => {
        let token

        AsyncStorage.getItem("jsonwebtoken").then(async (result) => {
            if (result !== null) {
                token = (JSON.parse(result))
                try {
                    const config = {
                        headers: {
                            Authorization: token,
                        },
                    };

                    const { data } = await axios.post(`${url}api/booking/bookSlot`, details, config)

                    if (data.result === true) {
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'Bookings' }],
                        });
                    }

                } catch (error) {
                    console.log("🚀 ~ file: ShowEstimatePriceScreen.jsx:43 ~ bookslot ~ error:", error)
                    navigation.dispatch(
                        StackActions.replace('Home'))
                }
            }
        })
            .catch((error) => { console.log("🚀 ~ file: ShowEstimatePriceScreen.jsx:58 ~ bookslot ~ error:", error) })

    }

    const payNow = () => {
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

            if (data) bookslot(details)
            // handle success

        }).catch((error) => {
            console.log("🚀 ~ file: ShowEstimatePriceScreen.jsx:50 ~ RazorpayCheckout.open ~ error:", error)
            navigation.navigate("Home")
        })
    }

    useEffect(() => {
        setPrice(calculatePrice())
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.details}>
                <Text numberOfLines={1} style={styles.selectedStation_name}>{selectedStation?.name}</Text>
                <Text style={styles.Address}>{selectedStation?.Address}</Text>
            </View>
            <View style={styles.chargerDetails}>
                <Text style={styles.chargername}>{chargerDetails?.name}</Text>
                <Text style={{ color: "grey", fontWeight: "500" }}>{chargerDetails?.type}</Text>
                <Text style={{ color: "grey", fontWeight: "500" }}>{chargerDetails?.capacity}</Text>
                <Text style={{ color: "grey", fontWeight: "500" }}>{'\u20B9 '}{units ? `${chargerDetails?.cost_per_unit} /unit` : `${chargerDetails?.cost_per_min} /15 minutes`}</Text>
            </View>


            <View style={styles.detailsContainer}>
            {
                advanceBooking? 
                <View style={styles.selectedTimeSlots}>
                    <View>
                        <Text style={{ textAlign: "center", marginBottom: 20 }}>Your selected slots are</Text>
                    </View>
                    <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
                        <Text>{giveCompleteTime(selectedSlots[0]?.starting_time)}</Text>
                        <Text>{giveCompleteTime(selectedSlots[selectedSlots.length - 1]?.ending_time)}</Text>
                    </View>
                </View>:null
            }
                <View style={styles.estimateDetails}>
                    <View style={styles.estimateDetail}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <FontAwesome name="rupee" style={{ marginRight: 10 }} color="grey" />
                            <Text style={{ color: "grey" }}>Estimated Price:</Text>
                        </View>
                        <View>
                            <Text style={{ color: "grey" }}>{'\u20B9 '}{price}</Text>
                        </View>
                    </View>
                    {
                        units ?
                            <View style={styles.estimateDetail}>
                                <View style={{ flexDirection: 'row', alignItems: "center" }}>
                                    <FontAwesome name="bolt" style={{ marginRight: 10 }} color="grey" />
                                    <Text style={{ color: "grey" }}>Total Units:</Text>
                                </View>
                                <Text style={{ color: "grey" }}>{units} KWH</Text>
                            </View> :
                            <View style={styles.estimateDetail}>
                                <View style={{ flexDirection: 'row', alignItems: "center" }}>
                                    <AntDesign style={{ marginRight: 10 }} name="clockcircle" color="grey" />
                                    <Text style={{ color: "grey" }}>Total Minutes:</Text>
                                </View>
                                <Text style={{ color: "grey" }}>{minutes} Mins</Text>
                            </View>
                    }
                </View>

                {
                    !advanceBooking ?
                        <View style={styles.proceedButton}>
                            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
                                <Image style={{ width: 70, height: 60 }} source={require("../assets/carcharging.png")} />
                                <Text style={{ color: "grey", textAlign: "center", marginLeft: 10 }}>Is your car connected to charger?</Text>
                            </View>
                            <View>
                                <Button title="Yes, proceed to charging" />
                            </View>
                        </View> :
                        <View style={styles.proceedButton}>
                            <View>
                                <Button onPress={() => payNow()} title="Yes, proceed to checkout" />
                            </View>
                        </View>
                }
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "chartreuse",
        flex: 1,
    },
    details: {
        alignItems: "center",
        paddingHorizontal: 40,
    },
    selectedTimeSlots: {
        borderColor: "grey",
        borderWidth: 1,
        marginHorizontal: 40,
        paddingHorizontal: 20,
        paddingVertical: 40,
        marginVertical: 80,
        borderRadius: 10
    },
    selectedStation_name: {
        fontSize: 20,
        color: 'grey',
        marginBottom: 8,
        fontWeight: "700"
    },
    Address: {
        color: 'grey',
        textAlign: "center",
        fontWeight: "600"
    },
    chargerDetails: {
        alignItems: "center",
        color: 'grey',
        textAlign: "center"
    },
    chargername: {
        color: 'grey',
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 10,
        paddingHorizontal: 8,
        paddingVertical: 5,
        marginVertical: 5,
        fontWeight: "500"
    },
    detailsContainer: {
        color: 'grey',
        flex: 1,
        backgroundColor: "white",
        borderTopLeftRadius: 40,
        borderTopEndRadius: 40,
        marginTop: 20,
    },
    button: {
        borderWidth: 2,
        paddingHorizontal: 8,
        textAlign: "center",
        paddingVertical: 5,
        borderColor: "grey",
        marginTop: 20,
        fontSize: 17,
        color: 'grey'
    },
    estimateDetails: {
        flex: 1,
        paddingHorizontal: 60,
        // justifyContent: "center",
        // alignItems: "center"
    },
    estimateDetail: {
        flexDirection: "row",
        marginBottom: 20,
        justifyContent: "space-between",
        width: "100%",
    },
    proceedButton: {
        marginBottom: 20,
        paddingHorizontal: 40
    }
});
export default ShowEstimatePriceScreen