import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Linking } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign"
import ChargersType from './ChargersType';
import { calculateAvailable } from '../utils/utils';

const BoxAtBottom = ({ stationDetail,location }) => {
  
  const openGoogleMapsDirections = (source, destination) => {
    if(source[0] && source[1] && destination[0] && destination[1]){
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
    return stationDetail.open >= time && stationDetail.close <= time
  }

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.text}>{stationDetail.name}</Text>
      </View>
        <Text style={styles.address}>{stationDetail.Address}</Text>
      <View style={{ display: "flex", flexDirection: "row", justifyContent:"space-between",alignItems:"center" }}>
        {getStationStatus ? <Text style={styles.open}>Open</Text> : <Text style={styles.close}>Close</Text>}
        <TouchableOpacity onPress={() => openGoogleMapsDirections([location[1],location[0]],[stationDetail.coordinates.latitude,stationDetail.coordinates.longitude])}>
          <Text style={styles.navigate}>Navigate</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ marginBottom: 10 }}><AntDesign name="clockcircle" color="dodgerblue" />{` ${stationDetail.open} - ${stationDetail.close}`}</Text>
      <View>
        <View>
          <Text style={styles.available}>Available Connectors {calculateAvailable(stationDetail.charger_type)}/{stationDetail.total}</Text>
        </View>
        <FlatList
          horizontal={true}
          data={stationDetail.charger_type}
          renderItem={charger => <ChargersType charger={charger} station={stationDetail} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopEndRadius: 20,
    marginBottom: 3
  },
  text: {
    fontSize: 18,
    marginTop: 20
  },
  address: {
    fontSize: 12
  },
  open: {
    backgroundColor: "greenyellow",
    alignSelf: "flex-start",
    marginVertical: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 15
  },
  available: {
    fontSize: 18
  },
  navigate:{
    borderColor:"grey",
    borderWidth: 1,
    padding: 5,
    borderRadius:10
  }
});

export default BoxAtBottom;