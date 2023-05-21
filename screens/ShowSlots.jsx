import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { Allslots } from '../constants/constant'

const filter = () => {
  // Get the current time
var currentTime = new Date();

// Convert the current time to the desired format (e.g., "hh:mm a")
var formattedCurrentTime = currentTime.toLocaleString('en-US', {
  hour: 'numeric',
  minute: '2-digit',
  hour12: true
});

// Filter the slots based on the current time
var filteredSlots = Allslots.map(function(slot) {
  var filteredTimeSlots = slot.slots.filter(function(timeSlot) {
    return (
      formattedCurrentTime >= timeSlot.starting_time &&
      formattedCurrentTime <= timeSlot.ending_time
    );
  });

  return {
    time: slot.time,
    slots: filteredTimeSlots
  };
});

// Output the filtered slots
console.log(filteredSlots);

}

const ShowSlots = ({ navigation }) => {
    useEffect(()=>{
        filter();
    },[])
    return (
        <View style={styles.container}>
            <View style={styles.slotsContainer}>
                <FlatList
                    data={Allslots}
                    renderItem={Allslot => {
                        return <View style={styles.timing}>
                            <Text style={{ marginRight: 10,color:"grey" }}>{Allslot.item.time}</Text>
                            <FlatList
                                horizontal={true}
                                data={Allslot.item.slots}
                                renderItem={slot => {
                                    return <TouchableOpacity onPress={() => navigation.navigate("PaymentPage")}>
                                        <View style={styles.slot}>
                                            <Text style={{color:"grey"}}>{slot.item.starting_time} - {slot.item.ending_time}</Text>
                                        </View>
                                    </TouchableOpacity>
                                }}
                                keyExtractor={(item) => item.id}
                            />
                        </View>
                    }}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingHorizontal: 15,
        backgroundColor:"white"
    },
    slotsContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    timing: {
        flexDirection: "row",
        marginBottom: 10,
        alignItems: "center"
    },
    slot: {
        marginLeft: 10,
        width: 90,
        borderColor: "grey",
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 7,
        alignItems: "center",
        color:"grey"
    },
})

export default ShowSlots