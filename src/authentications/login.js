import React,{useState} from 'react'
import {View,Text,Alert} from 'react-native'
import {TextInput,  Button} from 'react-native-paper'
import {styles} from '../globalstyles/globalstyle'

export default function login({navigation}){

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function submitHandler(){
        navigation.navigate('Home')
    }

    return(
        <View style={styles.container}>
            <Text style={{alignItems:'center', textAlign:'center', fontSize:25}} > Login </Text>
            <TextInput mode='outlined' onChangeText={(value) => setUsername(value)}  label="enter the username" />
            <TextInput mode='outlined' onChangeText={(value) => setPassword(value)} secureTextEntry={true} label="enter the password" />
            <Button onPress={submitHandler} style={{marginTop:10, margin:2}} mode='contained'> SignIn  </Button>
        </View>
    )
}


