import React from 'react'
import {View} from 'react-native'
import Login from './src/authentications/login'
import DrawerNavigation from './src/navigations/drawernavigation' 
import {createAppContainer} from 'react-navigation'
import {Provider} from 'react-redux'
import store from './src/store'

/***setup the login with the dynamic naivigation and drawer navigation */

export default function app(){
  return(
      <Provider store={store}>
       <DrawerNavigation />
       </Provider>
  )
}
