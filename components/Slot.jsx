import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { State } from '../context/StateProvider'
import { giveCompleteTime, sortTimeSlots } from '../utils/utils'

const Slot = ({ slot, date }) => {
    const { setSelectedDate, setSelectedSlots, selectedSlots, selectedDate} = State()
    const [selected, setSelected] = useState(false)
    const slotStyle = [styles.slot,
    slot.item.booked ? styles.bookedSlot : selected ? styles.selectedSlot : styles.simpleSlot,
    slot.item.starting_time === "NA" && styles.hiddenSlot
    ]

    useEffect(() => {
        if(date === selectedDate){
            const selected_start_time = selectedSlots[0]?.starting_time
            const selected_end_time = selectedSlots[selectedSlots.length - 1]?.ending_time
            const slot_start_time = slot.item.starting_time
            const slot_end_time = slot.item.ending_time
    
            if (!selected_end_time || !selected_start_time) return
    
            if (selectedSlots.length === 1 && (selected_start_time == slot_start_time && selected_end_time == slot_end_time)) {
                setSelected(true)
                return
            }
            
            setSelected(false)
            if (selectedSlots.length > 1 && slot_start_time !== "NA" && (selected_start_time <= slot_start_time && selected_end_time >= slot_end_time)){
                setSelected(true)
            } 
        }
    }, [selectedSlots,selectedDate])

    return (
        <TouchableOpacity disabled={slot.item.booked || slot.item.starting_time === "NA" ? true : false} onPress={() => {
            setSelectedDate(date)
            if (selected) {
                setSelectedSlots((prev) => prev.filter((slotItem) => slotItem.id !== slot.item.id))
            }
            else {
                setSelectedSlots(prev => {
                    return sortTimeSlots([...prev, { id: slot.item.id, starting_time: slot.item.starting_time, ending_time: slot.item.ending_time }])
                })
            }

        }}>
            <View style={slotStyle}>
                <Text style={{ color: "grey", fontSize: 12 }}>{giveCompleteTime(slot.item.starting_time)} - {giveCompleteTime(slot.item.ending_time)}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    slot: {
        marginLeft: 10,
        width: 65,
        paddingVertical: 7,
        alignItems: "center",
        color: "grey",
        borderRadius: 10,
    },
    simpleSlot: {
        borderColor: "grey",
        borderWidth: 1,
    },
    hiddenSlot: {
        marginLeft: 10,
        width: 65,
        opacity: 0
    },
    selectedSlot: {
        backgroundColor: "chartreuse",
    },
    bookedSlot: {
        backgroundColor: "green",
    }
})

export default Slot