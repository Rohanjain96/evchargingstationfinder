import { View, Text, FlatList, StyleSheet,TouchableOpacity  } from 'react-native'
import React from 'react'
import { slots } from '../constants/constant'

const ShowSlots = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.slotsContainer}>
            <Text style={{marginRight:10}}>10 Am</Text>
            <FlatList
                horizontal={true}
                data={slots}
                renderItem={slot => {
                    return <TouchableOpacity onPress={()=>navigation.navigate("PaymentPage")}>
                    <View style={styles.slot}>
                        <Text>{slot.item.starting_time} - {slot.item.ending_time}</Text>
                    </View>
                    </TouchableOpacity>
                }}
                keyExtractor={(item) => item.id}
            />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop:20,
        paddingHorizontal:15
    },
    slotsContainer:{
        flexDirection:"row",
        alignItems:"center"
    },
    slot:{
        marginLeft:10,
        width:80,
        borderColor:"grey",
        borderWidth:1,
        borderRadius:10,
        paddingVertical:7,
        alignItems:"center"
    },
})

export default ShowSlots