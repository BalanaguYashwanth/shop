import React from 'react'
import {View,Text} from 'react-native'
import Neworder from '../screens/neworder'
import {createStackNavigator}  from 'react-navigation-stack'
import Header from '../screens/header'

const screens={
    Neworder:{
        screen:Neworder,
        navigationOptions:({navigation}) => {
            return{
                headerLeft:()=>(null),
                headerTitle:() => (<Header navigation={navigation} title={'NewOrder'} />),
                headerStyle:{backgroundColor:'#eee'}
            }
           
        }
    }
}

const neworderstack = createStackNavigator(screens)

export default neworderstack
