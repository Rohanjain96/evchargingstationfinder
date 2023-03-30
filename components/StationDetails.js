import { View, Text, StyleSheet,FlatList } from 'react-native'
import React from 'react'
import ChargersType from './ChargersType'

const StationDetails = ({ station}) => {
    const {Address,station_name} = station
    return (
        <View style={styles.container}>
            <Text style={styles.station_name}>{station_name}</Text>
            <Text style={styles.Address}>{Address}</Text>
            <FlatList
                horizontal={true}
                data={station.chargers}
                renderItem={charger => <ChargersType charger={charger} station={station}/>}
                keyExtractor={(item) => item.name}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 50,
        paddingHorizontal:20,
        borderBottomColor: "grey",
        borderBottomWidth:2
    },
    station_name:{
        fontSize:20,
        marginBottom:8
    },
    Address:{
        marginBottom:10
    }
});

export default StationDetails