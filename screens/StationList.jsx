import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import StationDetails from '../components/StationDetails'
import Ionicons from "react-native-vector-icons/Ionicons"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { useNavigation, useRoute } from '@react-navigation/native'
import { filterStation } from '../utils/utils'

const StationList = () => {
  const route = useRoute()
  const { filterChargerName = "", available = false } = route.params || {}
  const navigation = useNavigation()
  const [stations, setStations] = React.useState([])
  useEffect(() => {
    setStations(() => filterStation(filterChargerName, available))
  }, [filterChargerName, available])
  return (
    <View style={styles.container}>
      <View style={styles.optionContainer}>
        <View style={styles.profile}>
          <TouchableOpacity onPress={() => navigation.navigate("UserProfile")}>
            <Ionicons name="ios-person-circle-outline" size={45} color="grey" />
          </TouchableOpacity>
        </View>
        <View style={styles.filter}>
          <TouchableOpacity onPress={() => navigation.navigate("FilterScreen")}>
            <FontAwesome5 name="filter" size={24} color="grey" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.allStation}>
        {
          stations.length > 0 ?
            <FlatList
              data={stations}
              renderItem={({ item }) => <StationDetails station={item} />}
              keyExtractor={item => item.id} /> : null
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "chartreuse",
    flex: 1,
    marginBottom: 10,
    position: 'relative'
  },

  optionContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    padding:20
  },
  allStation: {
    overflow: "hidden",
    paddingVertical: 20,
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderTopEndRadius: 40,
    marginBottom: 70
  }
});

export default StationList