import React, { useState, useEffect } from 'react'
import { View, Text,ScrollView,Alert } from 'react-native'
import { Card, Title, Paragraph, Button, Portal, Dialog, TextInput, Provider } from 'react-native-paper'
import { styles } from '../globalstyles/globalstyle'
import axios from 'axios'
import store from '../store/index'
import {useDispatch, useSelector} from 'react-redux'
import updatedata from '../middleware/middleware-thunk'

function home() {
    const [dummydetails, setDummyDetails] = useState([{ id: 1, name: 'yash', itemname: 'furtuniture', companyname: 'Berg furniture', dimensions: '22-22-22', quantities: '4', address: '315,29th street, kamber colony,annanagarwest,chennai' }])

    const dispatch = useDispatch()
    const details = useSelector(state=>state.data)   
    const [editdata,setEditdata] = useState()
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        dispatch(updatedata)
    }, [])

    function edited(){
        console.log(editdata)
        axios.patch('http://127.0.0.1:8000/api/neworder/'+editdata.id+'/',{
            name:editdata.name,
            brandname:editdata.brandname,
            modelname:editdata.modelname,
            dimensions:editdata.dimensions,
            address:editdata.address,
            quantities:editdata.quantities
        })
        .then(res=>{
            setVisible(false)
            dispatch(updatedata)
        })
        .catch(err=>console.log(err))
    }

    // function pressHandler()
    // {
    //     dispatch(updatedata)
    // }   

    function cancelitem(detail)
    {
        //Alert.alert(detail.id)
        axios.delete('http://127.0.0.1:8000/api/neworder/'+detail.id+'/')
        .then(res=>{
            console.log(res.data)
            dispatch(updatedata)
        })
        .catch(err=>console.log(err))
        //console.log(detail.id,detail.name)
    }

    return (
        <View >
            {/* <Button onPress={pressHandler} > submit </Button> */}

            <ScrollView>
            {
                details && details.map((detail) => (
                    <View key={detail.id} style={styles.card} >
                        <Card>
                            <Card.Content>
                                <Title>{'Name'} </Title>
                                <Paragraph> {detail.name} </Paragraph>
                                <Title>{'Model Name'} </Title>
                                <Paragraph> {detail.modelname} </Paragraph>
                                <Title>{'Brand Name'} </Title>
                                <Paragraph> {detail.brandname} </Paragraph>
                                <Title>{'dimensions'} </Title>
                                <Paragraph> {detail.dimensions} </Paragraph>
                                <Title>{'Quantites'} </Title>
                                <Paragraph> {detail.quantities} </Paragraph>
                                <Title>{'Address'} </Title>
                                <Paragraph> {detail.address} </Paragraph>
                            </Card.Content>
                            <Card.Actions>
                                <Button 
                                onPress={() => {
                                    setVisible(true)    
                                    setEditdata(detail)
                                    }}  
                                > edit 
                                </Button>
                                <Button  onPress={() => (cancelitem(detail))} > cancel  </Button>
                            </Card.Actions>

                        </Card>
                    </View>
                ))
            }
            </ScrollView>

            <Provider>
                <Portal>
                    <Dialog visible={visible}>
                        <Dialog.Title>  Order </Dialog.Title>
                     {   
                        editdata && <Dialog.Content>
                            <Text>   Refnumber: {editdata.id} </Text>
                            <TextInput style={styles.TextInput} onChangeText={(value) => setEditdata({...editdata,name:value})}  value={editdata.name} label='Name' />
                            <TextInput style={styles.TextInput} onChangeText={(value) => setEditdata({...editdata,modelname:value})}   value={editdata.modelname} label='Brand Name' />
                            <TextInput style={styles.TextInput} onChangeText={(value) => setEditdata({...editdata,brandname:value})}  value={editdata.brandname} label='Model Name' />
                            <TextInput style={styles.TextInput} onChangeText={(value) => setEditdata({...editdata,dimensions:value})}   value={editdata.dimensions} keyboardType='numeric' label='Height-Width-Length' />
                            <TextInput style={styles.TextInput} onChangeText={(value) => setEditdata({...editdata,quantities:value})}      value={editdata.quantities} keyboardType='numeric' label='Number of Quantities' />
                            <TextInput style={styles.TextInput} onChangeText={(value) => setEditdata({...editdata,address:value})}  value={editdata.address} multiline={true} numberOfLines={3} label='Pickup Address' />
                        </Dialog.Content>
                        
                    }
                        <Dialog.Actions style={{flexDirection:'column',justifyContent: 'space-around'}} >
                            <Button mode="contained"  style={{margin:5}}  onPress={edited} > SUBMIT </Button>
                            <Button mode="contained" style={{margin:5}} onPress={() => setVisible(false)} > CANCEL </Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
            </Provider>
        </View>

    )
}

// function mapstate(state){
//     return{
//          details : state
//     }
// }



export default home
