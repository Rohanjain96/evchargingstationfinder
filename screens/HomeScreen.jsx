import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { stations } from '../constants/constant'
import StationDetails from '../components/StationDetails'

const HomeScreen = () => {
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
      flex:1
  },
  allStation:{
    top:100,
    backgroundColor:"#000015",
    borderTopLeftRadius:40,
    borderTopEndRadius:40
  }
});

export default HomeScreen