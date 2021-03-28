import React,{useState} from 'react'
import {View,Text,StyleSheet,ScrollView} from 'react-native'
import {TextInput, Button} from 'react-native-paper'
import {styles} from '../globalstyles/globalstyle'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import updatedata from '../middleware/middleware-thunk'

export default function neworder(){

    const dispatch = useDispatch()
    const [name,setName] = useState()
    const [brandName,setBrandName] = useState()
    const [modelName,setModelName] = useState()
    const [dimensions,setDimensions] = useState()
    const [address,setAddress]= useState()
    const [quantities,setQuantities] = useState()

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
            console.log(res)
            dispatch(updatedata)
        })
        .catch(err=>console.log(err.response))
    }

    return(
        <View style={styles.form} >
            <ScrollView>
           <TextInput style={styles.TextInput} onChangeText={(val) => setName(val)} label='Name' />
           <TextInput style={styles.TextInput} onChangeText={(val) => setBrandName(val)} label='Brand Name' />
           <TextInput style={styles.TextInput} onChangeText={(val) => setModelName(val)} label='Model Name' />
           <TextInput style={styles.TextInput} onChangeText={(val) => setDimensions(val)}  keyboardType = 'numeric' label='Height-Width-Length' />
           <TextInput style={styles.TextInput} onChangeText={(val) => setAddress(val)}  keyboardType = 'numeric' label='Number of Quantities' />
           <TextInput style={styles.TextInput} onChangeText={(val) => setQuantities(val)} multiline={true} numberOfLines={3} label='Pickup Address' />
           <Button mode="contained" onPress={posting} > Order </Button>
           </ScrollView>
        </View>
    )
}
