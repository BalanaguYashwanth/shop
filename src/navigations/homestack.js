import React from 'react'
import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Home from '../screens/Home'
import Login from '../authentications/login'
import Header from '../screens/header'

const screens ={

    Home:{
        screen:Home,
        navigationOptions:({navigation}) => {
            return{
                headerLeft:()=>(null),
                headerTitle:() => (<Header navigation={navigation} title={'Home'} />),
                headerStyle:{backgroundColor:'#eee'}
            }
           
        }
    },
}

const Homestack = createStackNavigator(screens) 

//const Navigation = createAppContainer(Homestack)

export default Homestack
