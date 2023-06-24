import { View, StyleSheet, useWindowDimensions, Text } from 'react-native'
import React, { useEffect } from 'react'
import { TabView } from 'react-native-tab-view';
import { calculateMinutes, generateSlots, giveDate } from '../utils/utils';
import SlotList from '../components/SlotList';
import { State } from '../context/StateProvider';
import { Button } from '@rneui/themed';
import Loading from '../components/Loading';

const FirstDateSlots = React.memo(({ AllSlots }) => {
    return (
        <View style={styles.slotsContainer}>
            <View style={styles.chargerType}>
            </View>
            {
                AllSlots && <SlotList AllSlots={AllSlots} />
            }
        </View>
    )
})

const SecondDateSlots = React.memo(({ AllSlots }) => {
    return (
        <View style={styles.slotsContainer}>
            <View style={styles.chargerType}>
            </View>
            {
                AllSlots && <SlotList AllSlots={AllSlots} />
            }
        </View>
    )
})

const ThirdDateSlots = React.memo(({ AllSlots }) => {
    return (
        <View style={styles.slotsContainer}>
            <View style={styles.chargerType}>
            </View>
            {
                AllSlots && <SlotList AllSlots={AllSlots} />
            }
        </View>
    )
})

const ShowSlots = ({ route, navigation }) => {
    const { chargerDetails } = route.params
    const { selectedStation, selectedSlots, AllSlots, setAllSlots } = State()
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes, setRoutes] = React.useState([]);
    const [loading, setLoading] = React.useState(true)

    useEffect(() => {
        setAllSlots(() => generateSlots(selectedStation.open, selectedStation.close))
    }, [])

    useEffect(() => {
        if (AllSlots.length > 0) {
            setLoading(false)
            setRoutes([
                { key: 'FirstDate', title: `${AllSlots[0]?.date}` },
                { key: 'SecondDate', title: `${AllSlots[1]?.date}` },
                { key: 'ThirdDate', title: `${AllSlots[2]?.date}` },
            ])
        }
    }, [AllSlots])



    return (
        <View style={styles.container}>
            {
                !loading ?
                    <>
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
                        <View style={{ display: selectedSlots.length > 0 ? "flex" : "none" }}>
                            <Button
                                title={'Proceed'}
                                onPress={() => {
                                    navigation.navigate("EstimatePriceScreen", {
                                        chargerDetails: chargerDetails,
                                        minutes: calculateMinutes(selectedSlots[0].starting_time, selectedSlots[selectedSlots.length - 1].ending_time), advanceBooking: true
                                    })
                                }}
                                containerStyle={{ marginVertical: 10 }}
                            />
                        </View>
                    </>: <Loading/>
            }
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
        marginTop: 20
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
    }
})

export default ShowSlots