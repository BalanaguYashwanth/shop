import React,{useEffect} from 'react'
import {Text,View} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

export default function logout({navigation}) {

    useEffect(() => {
        async function logged()
        {
            try{
                await AsyncStorage.removeItem('user-token')
                //await AsyncStorage.removeItem('user-token-access')
                navigation.navigate('StackNavigation')
            }catch(err){
                console.log(err)
            }
        }
        logged()
    },[])

    
    return(
        <View>
            <Text> logged out.... </Text>
        </View>
    )
}
