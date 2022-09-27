import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, TextInput, View, TouchableOpacity, StyleSheet } from 'react-native'


export default function ListarMedicos({ navigation }) {
    const [lista, setLista] = useState()

    useEffect(() => {
        database.collection("contatos")
            .onSnapshot((query) => {
                const list = []
                query.forEach(doc => {
                    list.push({ ...doc.data(), id: doc.id })
                })
                setLista(list)
            })
    }, [])


    return (
        <View style={styles.container}>
            <Text>
                Lista de médicos
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

