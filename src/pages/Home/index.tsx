import React, { useEffect, useState } from "react"
import { 
    View, 
    Text, 
    Alert, 
    StyleSheet,
    StyleProp,
    TextStyle, 
} from "react-native"

import axios from "axios"
import numberFormater from "../../utils/numberFormater"
import Button from "../../components/Button"

interface responseText {
    recovered: number
    deaths: number
    cases: number
    last_update: string
}

interface description {
    children: React.ReactNode
    style?: StyleProp<TextStyle>
}

const Description: React.FC <description> = props => {
    return (
        <Text style={[{fontSize: 18, marginBottom: 5,}, props.style]}>
            {props.children}
        </Text>
    )
}

const Home = () => {
    const [cases, setCases] = useState<number>(0)
    const [deaths, setDeaths] = useState<number>(0)
    const [recovered, setRecovered] = useState<number>(0)
    const [lastUpdate, setLastUpdate] = useState<string>("")
    const [reload, setReload] = useState<number>(0)

    function reloadPage() {
        setReload(reload + 1)
    }

    useEffect(() => {
        axios
            .get("https://covid19-api.org/api/status/br")
            .then(response => {
                const data = response.data as responseText

                setCases(data.cases)
                setDeaths(data.deaths)
                setLastUpdate(data.last_update)
                setRecovered(data.recovered)

            })
            .catch(err => {
                Alert.alert("Erro na requisição", err)
            })
    }, [reload])

    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>COVID-19 Tracker</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.countryText}>Brasil</Text>
                <View style={styles.card}>
                    <Description style={{fontSize: 28, color: "#00ccaa"}}>
                        {numberFormater(cases.toString())}
                    </Description>
                    <Description>
                        Mortes: {numberFormater(deaths.toString())}
                    </Description>
                    <Description style={{marginBottom: 12,}}>
                        Casos Recuperados: {numberFormater(recovered.toString())}
                    </Description>
                    <Description style={{fontSize: 13,}}>
                        Última atualização: {new Date(lastUpdate).toLocaleDateString()} às {new Date(lastUpdate).toLocaleTimeString()}
                    </Description>
                </View>
            </View>
            <Button 
                containerStyle={{alignItems: "flex-start", marginLeft: 30,}}
                onPress={reloadPage}
            >
                <Text>RECARREGAR PÁGINA</Text>
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#fff",
        height: 50,
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    headerTitle: {
        fontSize: 20,
        color: "#00ccaa",
    },
    countryText: {
        fontSize: 30,
        marginBottom: 10,
    },
    body: {
        paddingHorizontal: 30,
        paddingVertical: 20,
    },
    card: {
        padding: 20,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: "#ccc",
    }
})

export default Home