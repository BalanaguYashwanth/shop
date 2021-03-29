import React,{useState} from 'react'
import {View,Text,Alert} from 'react-native'
import {TextInput,  Button} from 'react-native-paper'
import {styles} from '../globalstyles/globalstyle'
import axios from 'axios'
import  AsyncStorage from '@react-native-community/async-storage'

export default function login({navigation}){

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function submitHandler(){
        await axios.post('http://127.0.0.1:8000/login',{
            username:username,
            password:password
        })
        .then(async res=>{
            console.log(res.data.token)
            await AsyncStorage.setItem("user-token",res.data.token)
            await navigation.navigate('Home')
        })
        .catch(err=>console.log(err))
    }

    return(
        <View style={styles.container}>
            <Text style={{alignItems:'center', textAlign:'center', fontSize:25}} > Login </Text>
            <TextInput mode='outlined' onChangeText={(value) => setUsername(value)}  label="enter the username" />
            <TextInput mode='outlined' onChangeText={(value) => setPassword(value)} secureTextEntry={true} label="enter the password" />
            <Button onPress={submitHandler} style={{marginTop:10, margin:2}} mode='contained' > LOGIN  </Button>
        </View>
    )
}


