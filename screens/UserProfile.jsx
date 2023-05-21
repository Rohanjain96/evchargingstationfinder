import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Avatar } from '@rneui/themed'
import { Button } from '@rneui/base'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { State } from '../context/StateProvider'
import { capatilize } from '../utils/utils'

export default function ProfileScreen({ navigation }) {
    const { user } = State()
    return (
        <View style={styles.container}>

            <ScrollView >
                <View style={styles.Breadcrumb}>
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <Text style={{ fontSize: 20, color: "blue" }}>Home </Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20 }}>/ Profile</Text>
                </View>
                <View style={styles.profile}>
                    <Avatar source={{ uri: user.user.pic }} rounded size={150}></Avatar>
                    <Text style={{ fontSize: 30 }}>{capatilize(user.user.name)}</Text>
                    <View style={{ flexDirection: "row" }}>
                        <Button
                            buttonStyle={{ backgroundColor: 'green', marginTop: 10, marginBottom: 20, marginRight: 10 }}
                            onPress={() => navigation.navigate("ProfileEditScreen")}>Edit Profile</Button>
                        <Button
                            onPress={() => AsyncStorage.removeItem("jsonwebtoken").then(() => navigation.navigate("Login")).catch((error) => { console.error(error) })}
                            buttonStyle={{ backgroundColor: 'red', marginTop: 10, marginBottom: 20, marginRight: 10 }}>Sign Out</Button>
                    </View>
                </View>
                <View style={styles.profileItems}>
                    <View style={styles.profileItem}>
                        <Text style={styles.profileItemLabel}>Username</Text>
                        <Text style={styles.profileItemText}>{capatilize(user.user.name)}</Text>
                    </View>
                    <View style={styles.profileItem}>
                        <Text style={styles.profileItemLabel}>Email</Text>
                        <Text style={styles.profileItemText}>{user.user.email}</Text>
                    </View>
                    <View style={styles.profileItem}>
                        <Text style={styles.profileItemLabel}>Phone Number</Text>
                        <Text style={styles.profileItemText}>{user.user.phonenumber}</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#EDF2F7",
        padding: 20,
        paddingBottom: 0,
        flex: 1
    },
    Breadcrumb: {
        padding: 20,
        backgroundColor: 'white',
        letterSpacing: 1,
        fontWeight: "400",
        flexDirection: "row"
    },
    profile: {
        marginTop: 20,
        paddingTop: 10,
        alignItems: "center",
        backgroundColor: 'white'
    },
    profileItems: {
        backgroundColor: 'white',
        marginTop: 20,
        padding: 20,
        marginBottom: 20
    },
    profileItem: {
        marginTop: 15,
        borderBottomWidth: 1,
        borderBottomColor: "gray",
    },
    profileItemLabel: {
        fontSize: 18,
        fontWeight: "600",
        letterSpacing: 0.5
    },
    profileItemText: {
        fontSize: 16,
        marginBottom: 15,
        color: "grey",
    }
})