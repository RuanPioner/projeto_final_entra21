import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ImageBackground, Text, TextInput, View, TouchableOpacity, StyleSheet } from 'react-native'
import firebase from '../configuracao/firebaseConfig'

const database = firebase.firestore()

export default function EditarMedicos({ navigation }) {
    const [nome, setNome] = useState('')
    const [especialidade, setEspec] = useState('')
    const [telefone, setTelefone] = useState('')
    const [endereco, setEndereco] = useState('')
    const [msg, setMessage] = useState('')

    function callSave() {
        if (validarDados()) {
            setMessage('');
            cadastrar()
        }
    }
    function limpar() {
        setNome('')
        setEspec('')
        setTelefone('')
        setEndereco('')
    }

    function validarDados() {
        if (nome == '') {
            setMessage("Digite o nome")
            return false
        } if (especialidade == '') {
            setMessage("Digite o sobrenome")
            return false
        } if (telefone == '') {
            setMessage("Digite Telefone!")
            return false
        } if (endereco == '') {
            setMessage("Digite endereco!")
            return false
        }
        return true
    }

    function cadastrar() {
        database.collection("medicos").update({
            nome: nome,
            especialidade: especialidade,
            telefone: telefone,
            endereco: endereco,
            observacao: observacao
        })
        navigation.navigate('Medicos')
    }

    return (
        <View style={styles.container}>

            <View style={styles.containerMedico}>
                <Text>DR. lucas</Text>
                <Text>Cardiogeriatra</Text>

            </View>

            <View style={styles.containerEdicao}>

                <TextInput
                    style={styles.input}
                    placeholder="Nome do médico"
                    onChangeText={setNome}
                    value={nome}
                />


                <TextInput
                    style={styles.input}
                    placeholder="Especialidade"
                    onChangeText={setEspec}
                    value={especialidade}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Telefone"
                    onChangeText={setTelefone}
                    value={telefone}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Endereço"
                    onChangeText={setEndereco}
                    value={endereco}
                />

                <TextInput
                    placeholder="Observações"
                    style={styles.inputObs}
                    //onChangeText={setEndereco}
                    //value={endereco}
                />

                {(msg.search('Médico') > -1) ? <Text style={styles.text}>{msg}</Text> : null}
            </View>

            <View style={styles.containerBotoes}>
                <TouchableOpacity
                    style={styles.buttonEditar}

                >
                    <Text style={styles.textobotao}>EXCLUIR</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonSalvar}
                    onPress={callSave}

                >
                    <Text style={styles.textobotao}>SALVAR</Text>
                </TouchableOpacity>



            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //color: 'black',
        backgroundColor: '#2B335A',
        alignItems: 'center',
        //justifyContent: 'center',
    },
    containerMedico: {
        //flex: 1,
        flexDirection: "column",
        backgroundColor: '#FFCD93',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        borderRadius: 80,
        padding: 15,
        margin: 25
    },
    containerEdicao: {
        //flex: 20,
        backgroundColor: '#FFCD93',
        width: '80%',
        height: '70%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        //padding: 50    
    },
    containerBotoes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',


    },
    buttonEditar: {
        alignItems: "center",
        justifyContent: 'center',
        width: '30%',
        backgroundColor: "#EF815C",
        padding: 10,
        borderRadius: 30,
        marginTop: 50,
        marginLeft: '10%',
    },
    buttonSalvar: {
        alignItems: "center",
        justifyContent: 'center',
        width: '30%',
        backgroundColor: "#83C4D8",
        padding: 10,
        borderRadius: 30,
        marginTop: 50,
        marginRight: '10%'
    },
    textobotao: {
        color: 'white',
        fontWeight: 'bold'
    },
    input: {
        padding: 5,
        width: '70%',
        borderBottomColor: "white",
        borderBottomWidth: 1.5,
        color: "white",
        marginVertical: 15

    },
    inputObs: {
        padding: 5,
        width: '70%',
        height: 80,
        borderBottomColor: "white",
        borderBottomWidth: 1.5,
        color: "white",
        marginVertical: 15

    },
});