import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { MaterialIcons as Icon } from "@expo/vector-icons"
import { TouchableOpacity } from "react-native-gesture-handler"
import { useNavigation } from "@react-navigation/native"

const About = () => {
    const navigation = useNavigation()

    function navigateGoBack() {
        navigation.goBack()
    }

    return (
        <View style={styles.body}>
            <View style={styles.header}>
                <TouchableOpacity onPress={navigateGoBack}>
                    <Icon name="arrow-back" size={ 28 } style={{width: 50,}} />
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Sobre</Text>
                <Text style={styles.description}>
                    Eu, Kaique Araújo, criei este app para ajudar no combate ao covid-19,
                    mostrando métodos de prevenção e a importãncia deles, e mostrando em tempo real
                    o número casos confirmados, e morte por covid-19.
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        paddingHorizontal: 20,
    },
    header: {
        paddingVertical: 12,
        height: 50,
    },
    title: {
        fontSize: 24,
        color: "#00ccaa",
    },
    description: {
        marginVertical: 10,
        fontSize: 18,
    },
    content: {
        paddingLeft: 10,
        paddingRight: 10,
    }
})

export default About