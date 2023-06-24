import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { State } from '../context/StateProvider'
import { Avatar, Button } from '@rneui/themed'
import { url } from '../constants/url'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'

const EditProfileScreen = ({ navigation }) => {
    let token
    const { user,setUser } = State()
    const [picUrl] = useState(user.user.pic)
    const [form, setForm] = useState({
        ...user.user
    })

    AsyncStorage.getItem("jsonwebtoken").then((result) => {
        if (result !== null) {
            token = JSON.parse(result)
        }
    })
        .catch((error) => console.error(error))

    const updatedetails = async () => {
        try {
            const config = {
                headers: {
                    Authorization: token,
                },
            };
            const userdata = await axios.patch(`${url}api/users/updateDetail`, form, config)
            setUser({ type: "changeuser", payload: userdata.data });

            navigation.navigate("UserProfile")
        } catch (error) {
            console.log(error)
        }
    }

    const resetForm = () => {
        setForm({
            ...user.user
        })
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.Breadcrumb}>
                    <TouchableOpacity onPress={() => navigation.navigate("UserProfile")}>
                        <Text style={{ fontSize: 20, color: "blue" }}> Profile </Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20 }}>/ Edit Details</Text>
                </View>

                <View style={styles.profile}>
                    <View style={styles.image}>
                        <Avatar source={{ uri: picUrl }} rounded size={150}></Avatar>
                    </View>
                </View>

                <View style={styles.form}>
                    <Text style={styles.heading}>Update your profile</Text>
                    <View style={styles.forminput}>
                        <Text style={styles.label}>Username</Text>
                        <TextInput value={form.name} style={styles.input}
                            onChangeText={(text) => setForm({ ...form, name: text })}
                            placeholder={"Enter your name"} ></TextInput>
                    </View>
                    <View style={styles.forminput}>
                        <Text style={styles.label}>Phone Number</Text>
                        <TextInput editable={false} value={form.phonenumber.toString()} style={styles.input} ></TextInput>
                    </View>
                    <View style={styles.forminput}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput value={form.email} onChangeText={(text) => setForm({ ...form, email: text })}
                            style={styles.input}
                            placeholder={"Enter your email"} ></TextInput>
                    </View>
                    <View style={styles.forminput}>
                        <Text style={styles.label}>Pincode</Text>
                        <TextInput value={form.pincode.toString()} onChangeText={(text) => setForm({ ...form, pincode: text })}
                            style={styles.input}
                            placeholder={"Enter your pincode"} ></TextInput>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <Button
                            onPress={() => updatedetails()}
                            buttonStyle={{ backgroundColor: 'green', marginTop: 10, marginBottom: 10, marginRight: 10, paddingHorizontal: 20 }}>
                            Update
                        </Button>
                        <Button
                            onPress={() => resetForm()}
                            buttonStyle={{ backgroundColor: 'red', marginTop: 10, marginBottom: 10, paddingHorizontal: 30 }}>
                            Reset
                        </Button>
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
    image: {
        position: "relative",
    },
    imagetext: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "40%",
        paddingVertical: 10,
        backgroundColor: "red",
        color: 'white',
        textAlign: 'center',
        opacity: 0.4
    },
    form: {
        marginTop: 20,
        backgroundColor: 'white',
        padding: 20,
        marginBottom: 20
    },
    heading: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 15,
        textAlign:"center"
    },
    label: {
        fontWeight: "700",
        fontSize: 16
    },
    input: {
        borderColor: "grey",
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 10,
        paddingVertical: 5,
        paddingHorizontal: 15,
        fontWeight: "400",
        fontSize: 15
    }
})
export default EditProfileScreen