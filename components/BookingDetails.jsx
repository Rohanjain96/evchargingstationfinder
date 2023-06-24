import { View, Text, StyleSheet } from 'react-native';
import React from 'react'
import { giveCompleteTime } from '../utils/utils';

const BookingDetails = ({booking}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.stationName}>{booking.stationName}</Text>
                <Text style={styles.stationAddress}>{booking.stationAddress}</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionLabel}>Time Slot:</Text>
                {booking.timeSlot.map((slot, index) => (
                    <View key={index} style={styles.timeSlotContainer}>
                        <Text style={styles.timeSlotText}>
                            {giveCompleteTime(slot.starting_time)} - {giveCompleteTime(slot.ending_time)}
                        </Text>
                    </View>
                ))}
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionLabel}>Date:</Text>
                <Text style={styles.text}>{booking.date.split('T')[0]}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    header: {
        marginBottom: 24,
    },
    stationName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    stationAddress: {
        fontSize: 16,
        color: '#888',
    },
    section: {
        marginBottom: 24,
    },
    sectionLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    timeSlotContainer: {
        backgroundColor: '#f0f0f0',
        borderRadius: 4,
        padding: 8,
        marginBottom: 8,
    },
    timeSlotText: {
        fontSize: 14,
    },
    text: {
        fontSize: 16,
        marginBottom: 8,
    },
});
export default BookingDetails