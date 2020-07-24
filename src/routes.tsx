import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer"

import Home from "./screens/Home"
import About from "./screens/About"

import DrawerContent from "./components/DrawerContent"
import PreventMethods from "./screens/PreventMethods"

const Drawer = createDrawerNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        drawerContent={props => <DrawerContent {...props}/>}
        initialRouteName="Home"
        drawerStyle={{width: 300,}}
        sceneContainerStyle={{backgroundColor: "#fff"}}
      >
        <Drawer.Screen name="Home" component={ Home } />
        <Drawer.Screen name="PreventMethods" component={ PreventMethods } />
        <Drawer.Screen name="About" component={ About } />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default Routes