import { View, Text } from 'react-native'
import React from 'react'
import { Image } from '@rneui/themed'

const Loading = () => {
    return (
        <View style={{justifyContent:"center",alignItems:"center",flex:1,backgroundColor:"white"}}>
            <Image source={require("../assets/loading.gif")} style={{width:200,height:200}}/>
        </View>
    )
}

export default Loading