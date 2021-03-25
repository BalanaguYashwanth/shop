import React from 'react'
import {View} from 'react-native'
import Login from './src/authentications/login'
import DrawerNavigation from './src/navigations/drawernavigation' 
import {createAppContainer} from 'react-navigation'

//const Navigation = createAppContainer(Homestack)

/***setup the login with the dynamic naivigation and drawer navigation */

export default function app(){
  return(
       <DrawerNavigation />
  )
}
