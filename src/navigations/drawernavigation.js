import {createDrawerNavigator} from 'react-navigation-drawer'
import {createAppContainer} from 'react-navigation'
import Homestack from './homestack'
import Neworderstack from '../navigations/neworderstack'

//Homestack in the navigation

const screens={
    Home:{
        screen:Homestack
    },
    Neworder:{
        screen:Neworderstack
    }
} 

const rootdrawer=createDrawerNavigator(screens)

const appContainer = createAppContainer(rootdrawer)

export default appContainer
