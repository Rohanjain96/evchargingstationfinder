import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const ChargersType = ({ charger, station }) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigation.navigate("ChargerDetails", { chargerDetails: charger.item, station: station })}>
            <View style={styles.container}>
                <View style={styles.chargerNameBox}>
                    <Text>{charger.item.name}</Text>
                </View>
                <View style={styles.chargerDetails}>
                    <Text>{charger.item.type}</Text>
                    <Text style={styles.price}>{'\u20B9 '}{charger.item.price}/{charger.item.minutes}{" mins"}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 110,
        marginRight: 10,
    },
    chargerNameBox:{
        backgroundColor:"chartreuse",
        justifyContent:"center",
        alignItems:"center",
        paddingVertical:5,
        borderTopLeftRadius:10,
        borderTopEndRadius:10,
    },
    chargerDetails:{
        alignItems:"center",
        backgroundColor:"#000025"
    },
    price:{
        marginVertical:5
    }
});

export default ChargersType