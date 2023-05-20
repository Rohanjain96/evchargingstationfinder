import React from 'react'
import { KeyboardAvoidingView, Keyboard, ScrollView, TouchableWithoutFeedback } from 'react-native'

export default function KeyboardAvoidingWrapper({ children }) {
    return (
        <KeyboardAvoidingView style={{flex:1}} behavior={'height'}>
            <ScrollView contentContainerStyle={{flexGrow: 1}} >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    {children}
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
