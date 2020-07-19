import React from "react"
import { NavigationContainer } from  "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer"
import Home from "./pages/Home"
import DrawerContent from "./components/DrawerContent"
import About from "./pages/About"
import PreventMethods from "./pages/PreventMethods"

const Drawer = createDrawerNavigator()

const Routes = () => (
    <NavigationContainer>
        <Drawer.Navigator 
            sceneContainerStyle={{backgroundColor: "#fff"}}
            initialRouteName="home"
            drawerContent={ props => <DrawerContent {...props} /> }
            drawerStyle={{
                width: 310,
            }}
        >
            <Drawer.Screen name="home" component={ Home } />
            <Drawer.Screen name="prevent-methods" component={ PreventMethods } />
            <Drawer.Screen name="about" component={ About } />
        </Drawer.Navigator>
    </NavigationContainer>
)

export default Routes