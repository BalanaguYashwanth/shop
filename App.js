import React,{useState,useEffect} from 'react'
import {View} from 'react-native'
import Login from './src/authentications/login'
import DrawerNavigation from './src/navigations/drawernavigation' 
import {createAppContainer} from 'react-navigation'
import {Provider} from 'react-redux'
import store from './src/store'
import StackNavigation from './src/navigations/navigation' 
import  AsyncStorage from '@react-native-community/async-storage'
import Switchnavigation from './src/navigations/switchnavigation'

function app(){
  const [token,setToken] = useState(false)

  async function updatetoken(){
    const responsetoken=await AsyncStorage.getItem('user-token')
    console.log(responsetoken)
    if(responsetoken!=null)
    {
      setToken(true)
    }
    else{
      setToken(false)
    }
  }

  // useEffect(()=>{
  //   updatetoken()
  // },[])

  //  {
  //       token ?  <DrawerNavigation /> :  <StackNavigation />
  //     } 
      
  return(
      <Provider store={store}>
        <Switchnavigation />
      </Provider>
  )
}

export default app
