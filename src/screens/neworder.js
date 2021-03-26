import React,{useState} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {TextInput, Button} from 'react-native-paper'
import {styles} from '../globalstyles/globalstyle'

export default function neworder(){

    const [name,setName] = useState()
    const [itemName,setItemName] = useState()
    const [companayName,setCompanyName] = useState()
    const [dimensions,setDimensions] = useState()
    const [address,setAddress]= useState()
    const [quantities,setQuantities] = useState()

    return(
        <View style={styles.form} >
           <TextInput style={styles.TextInput}  label='Name' />
           <TextInput style={styles.TextInput} label='Item Name' />
           <TextInput style={styles.TextInput} label='Company Name' />
           <TextInput style={styles.TextInput} label='Height-Width-Length' />
           <TextInput style={styles.TextInput} label='Number of Quantities' />
           <TextInput style={styles.TextInput} multiline={true} numberOfLines={3} label='Pickup Address' />
           <Button mode="contained" > Order </Button>
        </View>
    )
}
