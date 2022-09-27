import { useState } from 'react';
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import Toast from 'react-native-toast-message'
import { FontAwesome } from '@expo/vector-icons'
import firebase from "../configuracao/firebaseConfig"

export default function CadastroUsuarios({navigation}) {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('')

    function callSave() {
        if (validarDados()) {
            setMessage('');
            save()
        }
    }
    function limpar() {
        setNome('')
        setSobrenome('')
        setEmail('')
        setSenha('')
    }

    function save() {
        if (email === '' || password === '') {
            Toast.show({
                type: 'info',
                text1: 'Atenção!',
                text2: 'Todos os campos devem ser preenchidos'
            })
        } else {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigation.navigate('Login')
            })
            .catch((error) => {
                console.log(error.message)
            });
        }
    }


    function validarDados() {
        if (nome == '') {
            setMessage("DIGITE NOME!")
            return false
        } if (sobrenome == '') {
            setMessage("DIGITE SOBRENOME!")
            return false
        } if (email == '') {
            setMessage("DIGITE EMAIL!")
            return false
        } if (password == '') {
            setMessage("DIGITE SENHA!")
            return false
        }
        return true
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/cadastro-bg.png')} resizeMode="cover" style={styles.image}>
                <View style={styles.bodyContainer}>

                    {/* <View style={styles.inputContainer}> */}
                    <TextInput
                        placeholder="Nome"
                        style={styles.input}
                        onChangeText={setNome}
                        value={nome}
                    />
                    {(message.search('NOME') > -1) ? <Text style={styles.text}>{message}</Text> : null}

                    <TextInput
                        placeholder="Sobrenome"
                        style={styles.input}
                        onChangeText={setSobrenome}
                        value={sobrenome}
                    />
                    {(message.search('SOBRENOME') > -1) ? <Text style={styles.text}>{message}</Text> : null}

                    <TextInput
                        placeholder="Email"
                        style={styles.input}
                        onChangeText={setEmail}
                        value={email}
                    />
                    {(message.search('EMAIL') > -1) ? <Text style={styles.text}>{message}</Text> : null}

                    <TextInput
                        placeholder="Senha"
                        style={styles.input}
                        onChangeText={setPassword}
                        value={password}
                    />
                    {(message.search('SENHA') > -1) ? <Text style={styles.text}>{message}</Text> : null}

                    {/* </View> */}


                    {(message.search('EMAIL') > -1) | (message.search('SENHA') > -1) | (message.search('NOME') > -1) | (message.search('SOBRENOME') > -1) ? <Text style={styles.text}>{message}</Text> : null}


                    <TouchableOpacity
                        style={styles.button}
                        onPress={callSave}
                    >
                        <Text style={styles.textobotao}>CADASTRAR</Text>
                    </TouchableOpacity>

                    {(message.search('Registro') > -1) ? <Text style={styles.text}>{message}</Text> : null}

                </View>

                <View style={styles.logoContainer}>
                    <Image source={require('../../assets/medpill.png')} resizeMode='contain' style={styles.logoBot} ></Image>
                </View>

            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bodyContainer: {
        flex: 3,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '66.6%',        
    },
    logoContainer: {
        flex: 1,
        width: '100%', 
        height: '33.3%',
        flexDirection: 'column-reverse',
        //margin: 'auto'        
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    button: {
        alignItems: "center",
        justifyContent: 'center',
        width: '40%',
        backgroundColor: "#2b335a",
        padding: 10,
        borderRadius: 30,
        marginTop: 50
    },
    textobotao: {
        color: 'white',
        fontWeight: 'bold'
    },
    text: {
        padding: 5,
        fontSize: 20,
        color: 'white',
        textAlign: "center",
        marginBottom: 10
    },
    input: {
        padding: 5,
        width: '70%',
        borderBottomColor: "white",
        borderBottomWidth: 1.5,
        color: "white"

    },
    inputContainer: {
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoBot: {
        with: '40%',
        height: '40%',
        marginBottom: 28
    }

});












