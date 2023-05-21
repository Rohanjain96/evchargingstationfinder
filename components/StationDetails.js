import { View, Text, StyleSheet,FlatList } from 'react-native'
import React from 'react'
import ChargersType from './ChargersType'

const StationDetails = ({ station}) => {
    const {Address,name} = station
    return (
        <View style={styles.container}>
            <Text style={styles.station_name}>{name}</Text>
            <Text style={styles.Address}>{Address}</Text>
            <FlatList
                horizontal={true}
                data={station.charger_type}
                renderItem={charger => <ChargersType charger={charger} station={station}/>}
                keyExtractor={(item) => item.name}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 30,
        paddingHorizontal:20,
        borderBottomColor: "grey",
        borderBottomWidth:2,
        backgroundColor:'white'
    },
    station_name:{
        fontSize:20,
        marginBottom:8,
        color:"grey"
    },
    Address:{
        marginBottom:10,
        color:"grey"
    }
});

export default StationDetails