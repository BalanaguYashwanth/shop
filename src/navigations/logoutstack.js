import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Logout from '../authentications/logout'

const screens={
    Logout:{
        screen:Logout,
    }
}

const logoutstack = createStackNavigator(screens)

export default logoutstack
