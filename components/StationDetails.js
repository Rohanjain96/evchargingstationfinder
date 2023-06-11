import { View, Text, StyleSheet, FlatList, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import ChargersType from './ChargersType'
import { State } from '../context/StateProvider'
import AntDesign from "react-native-vector-icons/AntDesign"

const StationDetails = ({ station }) => {

    const {location} = State()
    const { Address, name,coordinates } = station
    const openGoogleMapsDirections = (source, destination) => {
        if (source[0] && source[1] && destination[0] && destination[1]) {
            const directionsLink = `https://www.google.com/maps/dir/?api=1&origin=${source[0]},${source[1]}&destination=${destination[0]},${destination[1]}`;
            Linking.openURL(directionsLink);
        };
    }
    const getStationStatus = () => {
        let options = {
            hour12: false, hour: '2-digit',
            minute: '2-digit'
        };
        const time = new Date().toLocaleString([], options)
        return station.open >= time && station.close <= time
    }
    return (
        <View style={styles.container}>
            <Text style={styles.station_name}>{name}</Text>
            <Text style={styles.Address}>{Address}</Text>
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                {getStationStatus ? <Text style={styles.open}>Open</Text> : <Text style={styles.close}>Close</Text>}
                <TouchableOpacity onPress={() => openGoogleMapsDirections([location[1], location[0]], [coordinates.latitude, coordinates.longitude])}>
                    <Text style={styles.navigate}>Navigate</Text>
                </TouchableOpacity>
            </View>
            <Text style={{ marginBottom: 10,color:"gray" }}><AntDesign name="clockcircle" color="dodgerblue" />{` ${station.open} - ${station.close}`}</Text>
            <FlatList
                horizontal={true}
                data={station.charger_type}
                renderItem={charger => <ChargersType charger={charger} station={station} />}
                keyExtractor={(item) => item.name}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 30,
        paddingHorizontal: 20,
        borderBottomColor: "grey",
        borderBottomWidth: 2,
        backgroundColor: 'white'
    },
    station_name: {
        fontSize: 20,
        marginBottom: 8,
        color: "grey"
    },
    Address: {
        marginBottom: 10,
        color: "grey"
    },
    open: {
        backgroundColor: "greenyellow",
        alignSelf: "flex-start",
        marginVertical: 10,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 15
    },
    navigate: {
        borderColor: "grey",
        borderWidth: 1,
        padding: 5,
        borderRadius: 10,
        color:"gray"
    }
});

export default StationDetails