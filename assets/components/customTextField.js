import React from 'react';
import {TextInput} from '@react-native-material/core'

export default function CustomNumberInput({label = "teste", value = "0", onChangeText}){
    return(
        <TextInput 
        label = {label}
        value = {value}
        onChangeText = {onChangeText}
        keyboardType = "numeric"
        />
    )
}