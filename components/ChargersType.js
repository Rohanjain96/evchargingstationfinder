import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const ChargersType = ({ charger, station }) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigation.navigate("ChargerDetails", { chargerDetails: charger.item, station: station })}>
            <View style={styles.container}>
                <View style={styles.chargerNameBox}>
                    <Text>Charger {charger.index + 1}</Text>
                    <View style={styles.available}>
                        <Text style={{paddingTop: 0,paddingBottom: 0,}}>{charger.item.available}</Text>
                    </View>
                </View>
                <View style={styles.chargerDetails}>
                    <Text>{charger.item.type}</Text>
                    <Text style={styles.price}>{'\u20B9 '}{charger.item.cost_per_unit} cost per unit</Text>
                </View>
            </View>
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
        backgroundColor: "#000025"
    },
    price: {
        marginVertical: 5,
        fontSize: 12
    },
    available: {
        backgroundColor: "dodgerblue",
        fontSize: 12,
        marginLeft:10,
        width: 18,
        lineHeight:18,
        height:18,
        alignItems:"center",
        justifyContent:'center',
        borderRadius:1000
    }
});

export default ChargersType