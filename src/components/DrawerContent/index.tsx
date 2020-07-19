import React from "react"
import { 
    View, 
    StyleSheet, 
    Text, 
    Image, 
    StyleProp, 
    ViewStyle
} from "react-native"

import { 
    DrawerContentScrollView, 
    DrawerContentComponentProps 
} from "@react-navigation/drawer"
import { RectButton } from "react-native-gesture-handler"

interface menuItem {
    children: React.ReactNode
    style?: StyleProp<ViewStyle>
    onPress?(): any
}

const MenuItem: React.FC <menuItem> = props => {
    return (
        <RectButton 
            style={styles.menuItem}
            onPress={ props.onPress }
        >
            {props.children}
        </RectButton>
    )
}

const DrawerContent: React.FC <DrawerContentComponentProps> = props => {
    return (
        <DrawerContentScrollView>
            <View 
                style={styles.logoMenu}
            >
                <Image 
                    source={ require("../../img/icon.png") } 
                    resizeMode="center" 
                    style={{width: 310, height: 150}}
                />
            </View>
            <View>
                <MenuItem onPress={ () => props.navigation.navigate("home") }>
                    <Text style={{fontSize: 16, fontWeight: "600"}}>
                        Início
                    </Text>
                </MenuItem>
                <MenuItem onPress={ () => props.navigation.navigate("prevent-methods") }>
                    <Text style={{fontSize: 16, fontWeight: "600"}}>
                        Métodos de Prevenção
                    </Text>
                </MenuItem>
                <MenuItem 
                    onPress={ () => props.navigation.navigate("about") }
                >
                    <Text style={{fontSize: 16, fontWeight: "600"}}>
                        Sobre
                    </Text>
                </MenuItem>
            </View>
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    menuItem: {
        paddingVertical: 12,
        paddingHorizontal: 20,
    },
    logoMenu: {
        flex: 1, 
        justifyContent: "center", 
        height: 190,
        marginLeft: -60,
        // backgroundColor: "#eee",
        borderBottomWidth: 1,
        borderColor: "#ccc",
        marginBottom: 6,
    }
})

export default DrawerContent