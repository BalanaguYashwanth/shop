import React from 'react'
import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Home from '../screens/Home'
import Login from '../authentications/login'
import Header from '../screens/header'

const screens ={
    Login:{
        screen:Login
    },
    Home:{
        screen:Home,
        navigationOptions:({navigation}) => {
            return{
                headerLeft:()=>(null),
                headerTitle:() => (<Header navigation={navigation} title={'Home'} />),
                headerStyle:{backgroundColor:'#C0C0C0'}
            }
           
        }
    },
}

const Homestack = createStackNavigator(screens) 

//const Navigation = createAppContainer(Homestack)

export default Homestack
