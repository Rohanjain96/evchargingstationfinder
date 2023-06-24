import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { State } from '../context/StateProvider'
import { Button } from '@rneui/themed'

const ChooseUnitsScreen = ({ route, navigation }) => {
    const { chargerDetails } = route.params
    const { selectedStation } = State()

    const [units, setUnits] = useState('');

    const handleButtonClick = (value) => {
        setUnits(value);
    };
    return (
        <View style={styles.container}>
            <View style={styles.details}>
                <Text numberOfLines={1} style={styles.selectedStation_name}>{selectedStation.name}</Text>
                <Text style={styles.Address}>{selectedStation.Address}</Text>
            </View>
            <View style={styles.chargerDetails}>
                <Text style={styles.chargername}>{chargerDetails.name}</Text>
                <Text style={{ color: "grey", fontWeight: "500" }}>{chargerDetails.type}</Text>
                <Text style={{ color: "grey", fontWeight: "500" }}>{chargerDetails.capacity}</Text>
                <Text style={{ color: "grey", fontWeight: "500" }}>{'\u20B9 '}{chargerDetails.cost_per_unit} cost per unit </Text>
            </View>

            <View style={styles.options}>
                <View style={styles.input}>
                    <TextInput
                        style={styles.inputBox}
                        keyboardType="numeric"
                        value={String(units)}
                        onChangeText={(text) => setUnits(text)}
                    />

                    <Text>KWH</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title="5KWH" onPress={() => handleButtonClick(5)} />
                    <Button title="10KWH" onPress={() => handleButtonClick(10)} />
                    <Button title="20KWH" onPress={() => handleButtonClick(20)} />
                    <Button title="30KWH" onPress={() => handleButtonClick(30)} />
                </View>
                

            <Button buttonStyle={{marginHorizontal:20,marginBottom:50,width:250}} title="Estimate" onPress={()=>navigation.navigate("EstimatePriceScreen",{chargerDetails:chargerDetails,units:units})}></Button>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "chartreuse",
        flex: 1,
    },
    details: {
        alignItems: "center",
        paddingHorizontal: 40
    },
    selectedStation_name: {
        fontSize: 20,
        color: 'grey',
        marginBottom: 8,
        fontWeight: "700"
    },
    Address: {
        color: 'grey',
        textAlign: "center",
        fontWeight: "600"
    },
    chargerDetails: {
        alignItems: "center",
        color: 'grey',
        textAlign: "center"
    },
    chargername: {
        color: 'grey',
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 10,
        paddingHorizontal: 8,
        paddingVertical: 5,
        marginVertical: 5,
        fontWeight: "500"
    },
    options: {
        color: 'grey',
        flex: 1,
        backgroundColor: "white",
        borderTopLeftRadius: 40,
        borderTopEndRadius: 40,
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        flexDirection: "row",
        alignItems: "center",
        height: 40,
        marginTop:100,
        marginBottom: 10,
        borderColor: 'gray',
        borderBottomWidth: 1,
    },
    inputBox: {
        width: 80,
        height: 40,
        paddingHorizontal: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        gap: 10,
        flex:1,
    },
    button: {
        borderWidth: 2,
        paddingHorizontal: 8,
        textAlign: "center",
        paddingVertical: 5,
        borderColor: "grey",
        marginTop: 20,
        fontSize: 17,
        color: 'grey'
    }
});
export default ChooseUnitsScreen