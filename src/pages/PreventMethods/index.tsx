import React from "react"
import { 
    View, 
    Text, 
    StyleSheet, 
    FlatList, 
    StyleProp, 
    ViewStyle 
} from "react-native"

import { useNavigation } from "@react-navigation/native"
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler"
import { MaterialIcons as Icon } from "@expo/vector-icons"

interface preventMethod {
    children: React.ReactNode
    style?: StyleProp<ViewStyle>
}

const Title: React.FC = props => (
    <Text style={{fontSize: 21,}}>
        {props.children}
    </Text>
)

const Description: React.FC = props => (
    <Text style={{fontSize: 16, marginTop: 10,}}>
        {props.children}
    </Text>
)

const PreventMethod: React.FC <preventMethod> = props => (
    <View style={[{marginVertical: 10,}, props.style]}>
        {props.children}
    </View>
)

const PreventMethods = () => {
    const navigation = useNavigation()

    function navigateGoBack() {
        navigation.goBack()
    }

    return (
        <ScrollView style={styles.body}>
            <View style={styles.header}>
                <TouchableOpacity onPress={navigateGoBack}>
                    <Icon name="arrow-back" size={ 28 } style={{width: 50,}} />
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Métodos de Prevenção</Text>
                <PreventMethod>
                    <Title>
                        Use Máscara
                    </Title>
                    <Description>
                        Usar a máscara é muito importante, 
                        pois ajuda a evitar que a pessoa passe ou pegue Corona Vírus.
                    </Description>
                </PreventMethod>
                <PreventMethod>
                    <Title>Evite aglomerações</Title>
                    <Description>
                        Essa é a mais eficaz forma de evitar pegar Corona Vírus, os outros métodos ajudam mas 
                        a chance de pegar Corona Vírus é maior.
                    </Description>
                </PreventMethod>
                <PreventMethod style={{paddingBottom: 20,}}>
                    <Title>Higiene</Title>
                    <Description>
                        A higiene é muito importante, 
                        pois se você tem higiene você vai pegar Corona Vírus, 
                        quando ter contato da mão com os olhos, ou das mãos com a boca.
                        A seguir tem algumas formas de higiene necessárias: 
                    </Description>
                    <FlatList 
                        data={[
                            {key: "Higienize as mãos."}, 
                            {key: "Higienize os alimentos."},
                            {key: "Higienize as Embalagens."},
                            {key: "Tire os Sapatos ao chegar em casa."}
                        ]}

                        renderItem={({item}) => (
                            <Description>• {item.key}</Description>
                        )}
                    />
                </PreventMethod>
            </View>
        </ScrollView>
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
    content: {
        paddingLeft: 10,
        paddingRight: 10,
    }
})

export default PreventMethods