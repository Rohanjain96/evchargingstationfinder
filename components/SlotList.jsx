import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import Slot from './Slot'

const SlotList = ({AllSlots}) => {
    console.log(AllSlots.date)
    return (
        <View>
            <FlatList
                data={AllSlots.dateslots}
                renderItem={Allslot => {
                    return <View style={styles.timing}>
                        <Text style={{ marginRight: 10, color: "grey", width: 50 }}>{Allslot.item.hour}</Text>
                        <FlatList
                            horizontal={true}
                            data={Allslot.item.slots}
                            renderItem={slot => {
                                return <Slot slot={slot} date={AllSlots.date}/>
                            }}
                            keyExtractor={(item) => item.id}
                        />
                    </View>
                }}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    timing: {
        flexDirection: "row",
        marginBottom: 10,
        alignItems: "center"
    }
})

export default SlotList