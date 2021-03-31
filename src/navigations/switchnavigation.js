import React, { useState } from 'react'
import DrawerNavigation from './drawernavigation'
import StackNavigation from './navigation'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import AsyncStorage from '@react-native-community/async-storage'
import {Text,View} from 'react-native'

//const [token,setToken] = useState(false)

// async function  updatetoken()  {
//     const [token,setToken] = useState(false)
//     try {
//         let token = false
//         let responsetoken = await AsyncStorage.getItem('user-token')
//         setToken(responsetoken)
//     } catch (err) {
//         setToken(responsetoken)
//     }
//     return (
//         <View>
//             <Text> { token} </Text>
//         </View>
//     )
// }


// console.log('done', updatetoken())

//, updatetoken ? { initialRouteName: 'DrawerNavigation' } : { initialRouteName: 'StackNavigation' }

const screens = {
    StackNavigation: {
        screen: StackNavigation,
    },
    DrawerNavigation: {
        screen: DrawerNavigation
    },

}

const switchnavigation = createSwitchNavigator(screens)

export default createAppContainer(switchnavigation)
