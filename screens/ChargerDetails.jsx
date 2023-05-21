import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const ChargerDetails = ({ route, navigation }) => {
  const { chargerDetails, station } = route.params
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text numberOfLines={1} style={styles.station_name}>{station.name}</Text>
        <Text style={styles.Address}>{station.Address}</Text>
      </View>
      <View style={styles.chargerDetails}>
        <Text style={styles.chargername}>{chargerDetails.name}</Text>
        <Text style={{ color: "grey", fontWeight:"500" }}>{chargerDetails.type}</Text>
        <Text style={{ color: "grey", fontWeight:"500" }}>{chargerDetails.capacity}</Text>
        <Text style={{ color: "grey", fontWeight:"500" }}>{'\u20B9 '}{chargerDetails.cost_per_unit} cost per unit </Text>
      </View>

      <View style={styles.options}>
        <TouchableOpacity>
          <Text style={styles.button}>Start Session</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ShowSlots")}>
          <Text style={styles.button}>Book in advance</Text>
        </TouchableOpacity>
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
    paddingHorizontal: 40
  },
  station_name: {
    fontSize: 20,
    color: 'grey',
    marginBottom: 8,
    fontWeight:"700"
  },
  Address: {
    color: 'grey',
    textAlign: "center",
    fontWeight:"600"
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
    fontWeight:"500"
  },
  options: {
    color: 'grey',
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderTopEndRadius: 40,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center"
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
  }
});
export default ChargerDetails