import React from 'react'
import {StyleSheet,View,Text} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'
import {styles} from '../globalstyles/globalstyle'

export default function header({navigation,title}){

    function navigationHandler(){
        navigation.openDrawer()
    }

    return(
        <View style={styles.navigation} >
            <MaterialIcons  name='menu' size={28} onPress={navigationHandler} />
            <Text  style={styles.navigatorTitle}> {title} </Text>
        </View>

    )
}

