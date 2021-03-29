import React from 'react'
import {View} from 'react-native'
import Login from './src/authentications/login'
import DrawerNavigation from './src/navigations/drawernavigation' 
import {createAppContainer} from 'react-navigation'
import {Provider} from 'react-redux'
import store from './src/store'
import StackNavigation from './src/navigations/navigation' 
import  AsyncStorage from '@react-native-community/async-storage'

const Navigation = createAppContainer(StackNavigation)

/***setup the login with the dynamic naivigation and drawer navigation */

// function loadnavigation() {   
//   try{
//     AsyncStorage.getItem("user-token") ?  <Navigation /> :  <DrawerNavigation /> 
//    }
//   catch(err){
//     alert(err)
//    }
// }
//AsyncStorage.getItem("user-token") ?  <Navigation /> :  <DrawerNavigation /> 

function app(){
  return(
      <Provider store={store}>
      {
        AsyncStorage.getItem("user-token") ?  <DrawerNavigation /> :  <Navigation />
      }
      </Provider>
  )
}

export default app
