import React from "react"
import { 
  Section, 
  LogoSection, 
  AppName, 
  Logo, 
  MenuItem, 
  LabelMenuItem 
} from "./styles"

import { 
  DrawerContentScrollView, 
  DrawerContentComponentProps 
} from "@react-navigation/drawer"

import { 
  AntDesign,
  Octicons,
  Feather
} from "@expo/vector-icons"

const DrawerContent: React.FC <DrawerContentComponentProps> = props => {
  return (
    <DrawerContentScrollView>
      <LogoSection>
          <Logo 
            source={require("../../img/covid.png")} 
            resizeMode="center"
            style={{height: 60}}
          />
          <AppName>COVID-19 Tracker</AppName>
      </LogoSection>
      <Section>
        <MenuItem onPress={() => props.navigation.navigate("Home")}>
          <AntDesign name="home" size={22} />
          <LabelMenuItem>Rastreador COVID-19</LabelMenuItem>
        </MenuItem>

        <MenuItem onPress={() => props.navigation.navigate("PreventMethods")}>
          <Feather name="shield" size={22} />
          <LabelMenuItem>Métodos de Prevenção</LabelMenuItem>
        </MenuItem>

        <MenuItem onPress={() => props.navigation.navigate("About")}>
          <Octicons name="info" size={22} />
          <LabelMenuItem>Sobre</LabelMenuItem>
        </MenuItem>

      </Section>
    </DrawerContentScrollView>
  )
}

export default DrawerContent