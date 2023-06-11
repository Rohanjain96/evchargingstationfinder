import { View, Text, FlatList, StyleSheet, TouchableOpacity, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TabView, SceneMap } from 'react-native-tab-view';
import { useNavigation } from '@react-navigation/native'
// import { Allslots } from '../constants/constant'
import { generateSlots, giveDate } from '../utils/utils';
import { State } from '../context/StateProvider';

const FirstDateSlots = ({ AllSlots }) => {
    const navigation = useNavigation()
    const {setSelectedDate,setSelectedSlot} = State()
    return (
        <View style={styles.slotsContainer}>
            <View style={styles.chargerType}>
            </View>
            {
                AllSlots &&
                <FlatList
                    data={AllSlots.dateslots}
                    renderItem={Allslot => {
                        return <View style={styles.timing}>
                            <Text style={{ marginRight: 10, color: "grey",width:50 }}>{Allslot.item.hour}</Text>
                            <FlatList
                                horizontal={true}
                                data={Allslot.item.slots}
                                renderItem={slot => {
                                    return <TouchableOpacity onPress={() => {
                                        setSelectedDate(Allslot.item.date)
                                        setSelectedSlot([{starting_time:slot.item.starting_time,ending_time:slot.item.ending_time}])
                                        navigation.navigate("PaymentPage")
                                        }}>
                                        <View style={styles.slot}>
                                            <Text style={{ color: "grey", fontSize: 12 }}>{slot.item.starting_time} - {slot.item.ending_time}</Text>
                                        </View>
                                    </TouchableOpacity>
                                }}
                                keyExtractor={(item) => item.id}
                            />
                        </View>
                    }}
                    keyExtractor={(item) => item.id}
                />
            }

        </View>
    )
}
const SecondDateSlots = ({AllSlots}) => {
    const {setSelectedDate,setSelectedSlot} = State()
    const navigation = useNavigation()
    return (
        <View style={styles.slotsContainer}>
            <View style={styles.chargerType}>
            </View>
            {
                AllSlots &&
                <FlatList
                    data={AllSlots.dateslots}
                    renderItem={Allslot => {
                        return <View style={styles.timing}>
                            <Text style={{ marginRight: 10, color: "grey",width:50 }}>{Allslot.item.hour}</Text>
                            <FlatList
                                horizontal={true}
                                data={Allslot.item.slots}
                                renderItem={slot => {
                                    return <TouchableOpacity onPress={() => {
                                        setSelectedDate(Allslot.item.date)
                                        setSelectedSlot([{starting_time:slot.item.starting_time,ending_time:slot.item.ending_time}])
                                        navigation.navigate("PaymentPage")
                                        }}>
                                        <View style={styles.slot}>
                                            <Text style={{ color: "grey", fontSize: 12 }}>{slot.item.starting_time} - {slot.item.ending_time}</Text>
                                        </View>
                                    </TouchableOpacity>
                                }}
                                keyExtractor={(item) => item.id}
                            />
                        </View>
                    }}
                    keyExtractor={(item) => item.id}
                />
            }

        </View>
    )
}
const ThirdDateSlots = ({AllSlots}) => {
    const {setSelectedDate,setSelectedSlot} = State()
    const navigation = useNavigation()
    return (
        <View style={styles.slotsContainer}>
            <View style={styles.chargerType}>
            </View>
            {
                AllSlots &&
                <FlatList
                    data={AllSlots.dateslots}
                    renderItem={Allslot => {
                        return <View style={styles.timing}>
                            <Text style={{ marginRight: 10, color: "grey",width:50 }}>{Allslot.item.hour}</Text>
                            <FlatList
                                horizontal={true}
                                data={Allslot.item.slots}
                                renderItem={slot => {
                                    return <TouchableOpacity onPress={() => {
                                        setSelectedDate(Allslot.item.date)
                                        setSelectedSlot([{starting_time:slot.item.starting_time,ending_time:slot.item.ending_time}])
                                        navigation.navigate("PaymentPage")
                                        }}>
                                        <View style={styles.slot}>
                                            <Text style={{ color: "grey", fontSize: 12 }}>{slot.item.starting_time} - {slot.item.ending_time}</Text>
                                        </View>
                                    </TouchableOpacity>
                                }}
                                keyExtractor={(item) => item.id}
                            />
                        </View>
                    }}
                    keyExtractor={(item) => item.id}
                />
            }

        </View>
    )
}
const ShowSlots = () => {
    const [AllSlots, setAllSlots] = useState([])
    useEffect(() => {
        setAllSlots(() => generateSlots())
    }, [])

    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'FirstDate', title: `${giveDate(0)}` },
        { key: 'SecondDate', title: `${giveDate(1)}` },
        { key: 'ThirdDate', title: `${giveDate(2)}` },
    ]);


    return (
        <View style={styles.container}>
            <TabView
                navigationState={{ index, routes }}
                renderScene={({ route }) => {
                    switch (route.key) {
                        case 'SecondDate':
                            return <SecondDateSlots AllSlots={AllSlots[1]} />;
                        case 'ThirdDate':
                            return <ThirdDateSlots AllSlots={AllSlots[2]} />;
                        default:
                            return <FirstDateSlots AllSlots={AllSlots[0]} />;
                    }
                }}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingHorizontal: 15,
        backgroundColor: "white",
        flex: 1
    },
    slotsContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop:20
    },
    timing: {
        flexDirection: "row",
        marginBottom: 10,
        alignItems: "center"
    },
    slot: {
        marginLeft: 10,
        width: 65,
        borderColor: "grey",
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 7,
        alignItems: "center",
        color: "grey"
    },
})

export default ShowSlots