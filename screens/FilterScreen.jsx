import { Text, View, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { TabView, SceneMap } from 'react-native-tab-view';
import { ChargersType } from '../constants/chargerTypes';
import { Button, Image, Switch } from '@rneui/themed';
import { State } from '../context/StateProvider';

const All = () => {
    const { selectedCharger, setSelectedCharger } = State()
    return (
        <View>
            <Text style={{ fontSize: 18, marginTop: 10 }}>Connectors</Text>
            <View style={styles.chargerlist}>
                {
                    ChargersType.map((charger) => {
                        return (
                            <TouchableOpacity onPress={() => setSelectedCharger(charger.name)} key={charger.name}>
                                <View style={styles.charger}>
                                    <Image style={selectedCharger === charger.name ? styles.hightlightImage : styles.image} source={charger.path} />
                                    <Text style={{ fontSize: 12 }}>{charger.name}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </View>
    )
}
const AC = () => {
    const { selectedCharger, setSelectedCharger } = State()
    let filteredChargersType = ChargersType.filter((charger) => charger.type === "AC")
    return (
        <View>
            <Text style={{ fontSize: 18, marginTop: 10 }}>Connectors</Text>
            <View style={styles.chargerlist}>
                {
                    filteredChargersType.map((charger) => {
                        return (
                            <TouchableOpacity onPress={() => setSelectedCharger(charger.name)} key={charger.name}>
                                <View style={styles.charger}>
                                    <Image style={selectedCharger === charger.name ? styles.hightlightImage : styles.image} source={charger.path} />
                                    <Text style={{ fontSize: 12 }}>{charger.name}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </View>
    )
}
const DC = () => {
    const { selectedCharger, setSelectedCharger } = State()
    let filteredChargersType = ChargersType.filter((charger) => charger.type === "DC")
    return (
        <View>
            <Text style={{ fontSize: 18, marginTop: 10 }}>Connectors</Text>
            <View style={styles.chargerlist}>
                {
                    filteredChargersType.map((charger) => {
                        return (
                            <TouchableOpacity onPress={() => setSelectedCharger(charger.name)} key={charger.name}>
                                <View style={styles.charger}>
                                    <Image style={selectedCharger === charger.name ? styles.hightlightImage : styles.image} source={charger.path} />
                                    <Text style={{ fontSize: 12 }}>{charger.name}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </View>
    )
}

const renderScene = ({ route }) => {
    switch (route.key) {
        case 'AC':
            return <AC />;
        case 'DC':
            return <DC />;
        default:
            return <All />;
    }
};
const FilterScreen = ({ navigation }) => {
    const [open, setOpen] = React.useState(false);
    const { setSelectedCharger, selectedCharger } = State()
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'All', title: 'All' },
        { key: 'AC', title: 'Ac' },
        { key: 'DC', title: 'Dc' },
    ]);

    const handleTabChange = () => {
        setSelectedCharger("")
    }
    return (
        <View style={styles.container}>
            <View style={styles.text}>
                <Text style={{ fontSize: 30 }}>Filter</Text>
            </View>
            <View style={styles.filterContainer}>
                <View style={styles.chargerType}>
                    <TabView
                        navigationState={{ index, routes }}
                        renderScene={renderScene}
                        onIndexChange={setIndex}
                        initialLayout={{ width: layout.width }}
                        onSwipeEnd={handleTabChange}
                    />
                </View>
                <View style={styles.available}>
                    <Text>Available</Text>
                    <Switch value={open} onValueChange={() => setOpen(!open)} />
                </View>
                <View style={styles.buttons}>
                    <Button  buttonStyle={styles.clear} onPress={() => {
                        setSelectedCharger("")
                        navigation.navigate("StationList", { filterChargerName: "", available: false })
                    }
                    }>
                        Clear
                    </Button>
                    <Button buttonStyle={styles.apply} onPress={() => navigation.navigate("StationList", { filterChargerName: selectedCharger, available: open })}>Apply</Button>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "chartreuse",
        flex: 1,
        position: 'relative',
    },
    image: { width: 60, height: 60, marginBottom: 10 },
    hightlightImage: { width: 60, height: 60, marginBottom: 10, backgroundColor: "green", opacity: 0.2, borderRadius: 100 },
    text: {
        width: "100%",
        alignItems: "center",
        fontSize: "30",
        marginTop: 80
    },
    filterContainer: {
        overflow: "hidden",
        paddingVertical: 20,
        flex: 1,
        backgroundColor: "white",
        borderTopLeftRadius: 40,
        borderTopEndRadius: 40,
    },
    chargerType: {
        flex: 1,
        marginHorizontal: 40
    },
    chargerlist: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    charger: {
        marginRight: 16,
        marginVertical: 10,
        alignItems: "center",
        width: 60
    },
    available: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 30,
        marginBottom: 20
    },
    buttons: {
        flexDirection:"row",
        marginBottom: 5,
        marginHorizontal: 30,
        width:"100%"

    },
    apply:{
        width:"80%",
        marginLeft:0
    },
    clear:{
        width:"80%",
        marginRight:0,
        backgroundColor:'grey'
    }
})

export default FilterScreen