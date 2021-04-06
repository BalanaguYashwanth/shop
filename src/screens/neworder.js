import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { TextInput, Button, Card } from 'react-native-paper'
import { styles } from '../globalstyles/globalstyle'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import updatedata from '../middleware/middleware-thunk'
import AsyncStorage from '@react-native-community/async-storage'


export default function neworder() {

    const dispatch = useDispatch()
    const [name, setName] = useState()
    //const [brandName, setBrandName] = useState()
    const [brands, setBrands] = useState(['BRAND1'])
    const [modelName, setModelName] = useState()
    const [dimensions, setDimensions] = useState()
    const [address, setAddress] = useState()
    const [quantities, setQuantities] = useState()
    const [token, setToken] = useState()
    const [brandstore, setBrandStore] = useState('BRAND1')
    // const [inputs, setInputs] = useState([{ id: 1, title1: "5 inches", '78x72':"enter the 78x72",'75x72':"enter the 75x72" },{ id: 2, title1: "6 inches", '78x72':"enter the 78x72",'75x72':"enter the 75x72" } ])
    //const [inputs, setInputs] = useState([{ id: 1, title1: "5 inches",dimensions1:[{'75x72':"enter the 75x72"},{'75x72':"enter the 75x72"},{'75x72':"enter the 75x72"}] } ])
    const [inputs, setInputs] = useState({ BRAND1: { title1: '5 inches', dimensions1: { '78x72': '', '75x72': '' }, title2: '6 inches', dimensions2: { '78x72': '', '75x72': '' }, title3: '8 inches', dimensions3: { '78x72': '', '75x72': '' } } })
    //const [datas,setDatas] = useState([...inputs])

    useEffect(() => {
        load()
    }, [])

    async function load() {
        try {
            let token = await AsyncStorage.getItem('user-token')
            setToken(token)
        } catch (err) {
            alert(err)
        }
    }

    function posting() {
        axios.post('http://127.0.0.1:8000/api/neworder/', {
            name: name,
            brandname: brandName,
            modelname: modelName,
            dimensions: dimensions,
            address: address,
            quantities: quantities
        })
            .then(res => {
                console.log('res')
                setName('')
                //setBrandName('')
                setModelName('')
                setDimensions('')
                setAddress('')
                setQuantities('')
                setToken('')
                dispatch(updatedata)

            })
            .catch(err => console.log(err.response))
    }


    function objects(idata, brandname) {

        let datas = ''
        var skey = ''
        for (let key in idata) {
            if (key == brandname) {
                skey = key
                idata[key].key = key
                datas = idata[key]
                //arrs.push(idata[key])
                console.log('datas', datas,skey)

            }
        }

        return (
            <View>
                {/* // Object.entries(datas).map(([key,value])=>(
                //   <Text>  {keyvalue(key,value)} </Text>
                // )) */}
                <Card>
                    <Card.Title title={datas.title1} />
                    <Card.Content>
                        <TextInput label={['78x72']} value={inputs[skey].dimensions1['78x72']}  onChangeText={(value) => {
                            let allinputs = { ...inputs }
                            let structall = { title1: '5 inches', dimensions1: { ...inputs[skey].dimensions1, '78x72': value }, title2: '6 inches', dimensions2: {  ...inputs[skey].dimensions2 }, title3: '8 inches', dimensions3: { ...inputs[skey].dimensions3 } }
                            allinputs[skey] = structall
                            setInputs(allinputs)
                        }} />

                        <TextInput label={['75x72']} value={inputs[skey].dimensions1['75x72']}  onChangeText={(value) => {
                            let allinputs1 = { ...inputs }
                            let structall1 = { title1: '5 inches', dimensions1: { ...inputs[skey].dimensions1, '75x72': value }, title2: '6 inches', dimensions2: {  ...inputs[skey].dimensions2 }, title3: '8 inches', dimensions3: { ...inputs[skey].dimensions3 } }
                            allinputs1[skey] = structall1
                            setInputs(allinputs1)

                        }} />
                    </Card.Content>

                    <Card.Title title={datas.title2} />
                    <Card.Content>
                        <TextInput label={['78x72']} value={inputs[skey].dimensions2['78x72']}  onChangeText={(value) => {
                            let allinputs2 = { ...inputs }
                            let structall2 = { title1: '5 inches', dimensions1: { ...inputs[skey].dimensions1 }, title2: '6 inches', dimensions2: { ...inputs[skey].dimensions2, '78x72': value }, title3: '8 inches',  dimensions3: { ...inputs[skey].dimensions3 }  }
                            allinputs2[skey] = structall2
                            setInputs(allinputs2)
                        }} />

                        <TextInput label={['75x72']} value={inputs[skey].dimensions2['75x72']}  onChangeText={(value) => {
                            let allinputs1 = { ...inputs }
                            let structall1 = { title1: '5 inches', dimensions1: { ...inputs[skey].dimensions1 }, title2: '6 inches', dimensions2: { ...inputs[skey].dimensions2, '75x72': value }, title3: '8 inches',  dimensions3: { ...inputs[skey].dimensions3 }  }
                            allinputs1[skey] = structall1
                            setInputs(allinputs1)

                        }} />
                    </Card.Content>

                    <Card.Title title={datas.title3} />
                    <Card.Content>
                        <TextInput label={['78x72']} value={inputs[skey].dimensions3['78x72']}  onChangeText={(value) => {
                            let allinputs2 = { ...inputs }
                            let structall2 = { title1: '5 inches', dimensions1: { ...inputs[skey].dimensions1 }, title2: '6 inches', dimensions2: { ...inputs[skey].dimensions2}, title3: '8 inches',  dimensions3: { ...inputs[skey].dimensions3,'78x72': value  }  }
                            allinputs2[skey] = structall2
                            setInputs(allinputs2)
                        }} />

                        <TextInput label={['75x72']} value={inputs[skey].dimensions3['75x72']}  onChangeText={(value) => {
                            let allinputs1 = { ...inputs }
                            let structall1 = { title1: '5 inches', dimensions1: { ...inputs[skey].dimensions1 }, title2: '6 inches', dimensions2: { ...inputs[skey].dimensions2 }, title3: '8 inches',  dimensions3: { ...inputs[skey].dimensions3, '75x72': value }  }
                            allinputs1[skey] = structall1
                            setInputs(allinputs1)

                        }} />
                    </Card.Content>
                </Card>
            </View>
        )
    }

    function keyvalue(key, value) {
        if (key == 'title1') {
            console.log(value)
        }
    }



    function output() {
        console.log('inputs', inputs)
    }

    function addbrand() {
        let newinput = { ...inputs }

        let numbrands = brands.length + 1
        setBrands([...brands, ('BRAND' + numbrands)])
        let namebrand = 'BRAND' + numbrands

        newinput[namebrand] = { title1: '5 inches', dimensions1: { '78x72': '', '75x72': '' }, title2: '6 inches', dimensions2: { '78x72': '', '75x72': '' }, title3: '8 inches', dimensions3: { '78x72': '', '75x72': '' } }
        setInputs(newinput)

    }

    function record(data) {
        setBrandStore(data)
        objects(inputs, data)
        //console.log('updated')
    }

    return (
        <View style={styles.form} >

            <TextInput style={styles.TextInput} value={name} onChangeText={(val) => setName(val)} label='Name' />

            <View style={{ flexDirection: 'row' }} >
                {
                    brands.map((brand, index) => (
                        <Button key={index} onPress={() => record(brand)} > {brand} </Button>
                    ))
                }
                <Button onPress={addbrand}  >   + </Button>
            </View>
            {console.log('updatedinputs', inputs, brandstore)}
            <ScrollView>
                <View>
                    {objects(inputs, brandstore)}
                </View>
                <Button mode="contained" onPress={output} > Order </Button>
            </ScrollView>
        </View>
    )
}

