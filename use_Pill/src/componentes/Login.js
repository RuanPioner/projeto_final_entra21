import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import firebase from '../configuracao/firebaseConfig'

export default function Login({navigation}) {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('')

    function callSave() {
        if (validarDados()) {
            setMessage('');
            logar()
        }
    }
    function limpar() {
        setPassword('')
        setEmail('')
    }

    function logar() {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user.email)
            //limpadados()
            navigation.navigate('Home')
            
        })
        .catch((error) => {
            console.log(error.message)
        });
      
    }
        
    function logarGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider)
          .then((result) => {
              const credential = result.credential
              const token = credential.accessToken;
              // The signed-in user info.
              const user = result.user;
              console.log(user)
              navigation.navigate('logado')
              
          })
          .catch((error) => {
              console.log(error.message)
          });
    }

    function validarDados() {
        if (email == '') {
            setMessage("Digite um email")
            return false
        } if (password == '') {
            setMessage("Digite a senha")
            return false
        }
        return true
    }

    return (
        <View style={styles.container}>

            <ImageBackground source={require('../../assets/login-bg.png')} resizeMode="cover" style={styles.image}>

                <View style={styles.logoContainer}>
                    <Image source={require('../../assets/medpill.png')} resizeMode='contain' style={styles.logoTop} ></Image>
                </View>

                <View style={styles.bodyContainer}>
                    <View style={styles.inputContainer}>

                    <TextInput
                        placeholder="Email"
                        style={styles.input}
                        onChangeText={setEmail}
                        value={email}
                    />

                    {(message.search('email') > -1) ? <Text style={styles.text}>{message}</Text> : null}       

                    <TextInput
                        placeholder="Senha"
                        style={styles.input}
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry={true}
                    />
                    {(message.search('senha') > -1) ? <Text style={styles.text}>{message}</Text> : null}
                    </View>

                    <Text style={{ alignSelf: 'flex-end', marginRight: '15%' , marginTop: 20, color: '#FBCB76' }}>Esqueceu sua senha?</Text>

                    

                    <TouchableOpacity
                        style={styles.button}
                        onPress={callSave}
                    >
                        <Text style={styles.textobotao}>ENTRAR</Text>
                    </TouchableOpacity>

                    
                    <TouchableOpacity
                        style={styles.button}
                        onPress={logarGoogle}
                    >
                        <Text style={styles.textobotao}>LOGAR COM GOOGLE</Text>
                    </TouchableOpacity>

                    <View style={styles.cadastrarContainer}>
                        <Text style={{ color: 'white' }}>Não possui uma conta?</Text>
                        <TouchableOpacity
                        onPress={() => navigation.navigate("Cadastro")}
                        >
                        <Text style={{ color: '#FBCB76' }}> Cadastre-se</Text>
                        </TouchableOpacity>
                        
                    </View>

                    {(message.search('Não foi') > -1) ? <Text style={styles.text}>{message}</Text> : null}

                </View>



            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 7,
        color: 'black'
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
        flexDirection: 'column'        
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    button: {
        alignItems: "center",
        width: '40%',
        backgroundColor: "#83C4D8",
        padding: 10,
        borderRadius: 30,
        marginTop: 50
    },
    textobotao: {
        color: 'white',
        fontWeight: 'bold'
    },
    text: {
        fontSize: 10,
        color: 'red',
        textAlign: "left",
        marginLeft: '15%',
        marginTop: 3
    },
    input: {
        padding: 5,
        width: '70%',
        borderBottomColor: "white",
        borderBottomWidth: 1.5,
        color: "white",
        margin: 'auto',
        marginTop: 25
    },
    inputContainer: {
        width: '100%',
        flexDirection: "column",
        
    },
    cadastrarContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 5,
    },
    logoTop: {
        with: '40%',
        height: '40%',
        marginTop: 38,
    }

});











