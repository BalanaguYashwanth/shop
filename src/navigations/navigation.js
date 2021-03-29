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
}

const stacknavigation = createStackNavigator(screens) 

//const Navigation = createAppContainer(Homestack)

export default stacknavigation
