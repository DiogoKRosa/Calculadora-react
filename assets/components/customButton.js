import React from 'react'
import { FAB } from '@react-native-material/core'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'

export default function CustomOperationButton({name, onPress}){
    return(
        <FAB color="#1034a6" onPress={onPress} icon={props => <Icon name={name} {...props}/>} />
    )
}