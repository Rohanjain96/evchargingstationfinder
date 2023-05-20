import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { stations } from '../constants/constant'
import StationDetails from '../components/StationDetails'

const StationList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.allStation}>
      <FlatList
      data={stations}
      renderItem={({item}) => <StationDetails station={item}/>}
      keyExtractor={item =>item.id}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: "chartreuse",
      flex:1,
      marginBottom:10
  },
  allStation:{
    top:65,
    overflow:"hidden",
    paddingVertical:20,
    backgroundColor:"#000013",
    borderTopLeftRadius:40,
    borderTopEndRadius:40,
    marginBottom: 10
  }
});

export default StationList