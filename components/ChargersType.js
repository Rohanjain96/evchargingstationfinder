import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { State } from '../context/StateProvider'
import AwesomeAlert from 'react-native-awesome-alerts';

const ChargersType = ({ charger, station }) => {
    const navigation = useNavigation()
    const { setSelectedStation } = State()
    const [showAlert,setShowAlert] = useState(false)

    return (
        <TouchableOpacity onPress={() => {
            setSelectedStation(station)
            if (charger.item.available === 0) setShowAlert(prev=>!prev)
            else navigation.navigate("ChargerDetails", { chargerDetails: charger.item })
        }}>
            <View style={styles.container}>
                <View style={styles.chargerNameBox}>
                    <Text style={{ color: "white" }}>Charger {charger.index + 1}</Text>
                    <View style={styles.available}>
                        <Text style={{ paddingTop: 0, paddingBottom: 0, color: "white" }}>{charger.item.available}</Text>
                    </View>
                </View>
                <View style={styles.chargerDetails}>
                    <Text>{charger.item.type}</Text>
                    <Text style={styles.price}>{'\u20B9 '}{charger.item.cost_per_unit} cost per unit</Text>
                </View>
            </View>
            <AwesomeAlert
                show={showAlert}
                showProgress={false}
                message="This charger is not available right now, But you can book slot in advance"
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                onDismiss={()=>setShowAlert(false)}
                showConfirmButton={true}
                confirmText="Yes, Book slot in advance"
                confirmButtonColor="dodgerblue"
                onConfirmPressed={() => {
                    navigation.navigate("ShowSlots")
                    setShowAlert(false)
                }}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 110,
        marginRight: 10,
        marginVertical: 10
    },
    chargerNameBox: {
        backgroundColor: "chartreuse",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 5,
        flexDirection: "row",
        borderTopLeftRadius: 10,
        borderTopEndRadius: 10,
    },
    chargerDetails: {
        alignItems: "center",
        backgroundColor: "lightgrey"
    },
    price: {
        marginVertical: 5,
        fontSize: 12
    },
    available: {
        backgroundColor: "dodgerblue",
        fontSize: 12,
        marginLeft: 10,
        width: 18,
        lineHeight: 18,
        height: 18,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 1000
    }
});

export default ChargersType