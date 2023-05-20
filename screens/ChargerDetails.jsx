import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
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
        <Text>{chargerDetails.type}</Text>
        <Text>{chargerDetails.capacity}</Text>
        <Text>{'\u20B9 '}{chargerDetails.cost_per_unit} cost per unit </Text>
      </View>

      <View style={styles.options}>
          <TouchableOpacity>
            <Text style={styles.button}>Start Session</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate("ShowSlots")}>
            <Text style={styles.button}>Book in advance</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "chartreuse",
    flex: 1
  },
  details:{
    alignItems:"center",
    paddingHorizontal:40
  },
  station_name: {
    fontSize: 20,
    marginBottom: 8,
  },
  Address: {
    textAlign: "center"
  },
  chargerDetails:{
    alignItems:"center",
    textAlign:"center"
  },
  chargername: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 10,
    paddingHorizontal:8,
    paddingVertical:5,
    marginVertical:5
  },
  options:{
    flex:1,
    backgroundColor:"#000015",
    borderTopLeftRadius:40,
    borderTopEndRadius:40,
    marginTop:20,
    justifyContent:"center",
    alignItems:"center"
  },
  button:{
    borderWidth:2,
    paddingHorizontal:8,
    textAlign:"center",
    paddingVertical:5,
    borderColor:"grey",
    marginTop:20,
    fontSize:17
  }
});
export default ChargerDetails