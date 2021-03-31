import {createDrawerNavigator} from 'react-navigation-drawer'
import {createAppContainer} from 'react-navigation'
import Homestack from './homestack'
import Neworderstack from '../navigations/neworderstack'
import LogoutStack from '../navigations/logoutstack'
//Homestack in the navigation

const screens={
    Home:{
        screen:Homestack
    },
    Neworder:{
        screen:Neworderstack
    },
    Logout:{
        screen:LogoutStack
    },
} 

const rootdrawer=createDrawerNavigator(screens)

//const appContainer = createAppContainer(rootdrawer)

export default rootdrawer
