import React,{useState,useEffect} from 'react'
import {View,Text,StyleSheet,ScrollView} from 'react-native'
import {TextInput, Button} from 'react-native-paper'
import {styles} from '../globalstyles/globalstyle'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import updatedata from '../middleware/middleware-thunk'
import  AsyncStorage from '@react-native-community/async-storage'

export default function neworder(){

    const dispatch = useDispatch()
    const [name,setName] = useState()
    const [brandName,setBrandName] = useState()
    const [modelName,setModelName] = useState()
    const [dimensions,setDimensions] = useState()
    const [address,setAddress]= useState()
    const [quantities,setQuantities] = useState()
    const [token,setToken] = useState()

    useEffect(()=>{
        load()
    },[])

    async function load()
    {
        try{
            let token=await AsyncStorage.getItem('user-token')
            setToken(token)
        }catch(err){
            alert(err)
        }
    }

    function posting()
    {
        axios.post('http://127.0.0.1:8000/api/neworder/',{
            name:name,
            brandname:brandName,
            modelname:modelName,
            dimensions:dimensions,
            address:address,
            quantities:quantities
        })
        .then(res=>{
            console.log('res')
            setName('')
            setBrandName('')
            setModelName('')
            setDimensions('')
            setAddress('')
            setQuantities('')
            setToken('')
            dispatch(updatedata)
           
        })
        .catch(err=>console.log(err.response))      
    }

    return(
        <View style={styles.form} >
            
            <ScrollView>
           <TextInput style={styles.TextInput} value={name} onChangeText={(val) => setName(val)} label='Name' />
           <TextInput style={styles.TextInput} value={brandName} onChangeText={(val) => setBrandName(val)} label='Brand Name' />
           <TextInput style={styles.TextInput} value={modelName} onChangeText={(val) => setModelName(val)} label='Model Name' />
           <TextInput style={styles.TextInput} value={dimensions} onChangeText={(val) => setDimensions(val)}  keyboardType = 'numeric' label='Height-Width-Length' />
           <TextInput style={styles.TextInput} value={quantities} onChangeText={(val) => setQuantities(val)} keyboardType = 'numeric'  label='Number of Quantities'  />
           <TextInput style={styles.TextInput} value={address} onChangeText={(val) => setAddress(val)} multiline={true}  numberOfLines={3} label='Pickup Address'  />
           <Button mode="contained" onPress={posting} > Order </Button>
           </ScrollView>
           
        </View>
    )
}
