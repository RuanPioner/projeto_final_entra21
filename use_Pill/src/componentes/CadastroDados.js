import { useState } from 'react';
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';

export default function CadastroDadosPessoais({navigation}) {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [dataNascimento, setDataNasc] = useState('');
    const [message, setMessage] = useState('');

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
        fetch('http://localhost:8080/dadospessoais',
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json', 'content-Type': 'application/json'
                },
                body: JSON.stringify({
                    altura: altura,
                    peso: peso,
                    dataNascimento: dataNascimento

                })
            }
        )
            .then(() => { setMessage("Registro inserido com sucesso") })
            .then(() => limpar())
            .catch((err) => { setMessage("Registro não foi inserido", err) })
    }


    function validarDados() {
        if (altura == '') {
            setMessage("DIGITE ALTURA!")
            return false
        } if (peso == '') {
            setMessage("DIGITE PESO!")
            return false
        } if (dataNascimento == '') {
            setMessage("DIGITE A DATA!")
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
                        placeholder="Altura"
                        style={styles.input}
                        onChangeText={setAltura}
                        value={altura}
                    />
                    {(message.search('Altura') > -1) ? <Text style={styles.text}>{message}</Text> : null}

                    <TextInput
                        placeholder="Peso"
                        style={styles.input}
                        onChangeText={setPeso}
                        value={peso}
                    />
                    {(message.search('Peso') > -1) ? <Text style={styles.text}>{message}</Text> : null}

                    <TextInput
                        placeholder="Data Nascimento"
                        style={styles.input}
                        onChangeText={setDataNasc}
                        value={dataNascimento}
                    />
                    {(message.search('Data') > -1) ? <Text style={styles.text}>{message}</Text> : null}



                    {/* </View> */}


                    {(message.search('Altura') > -1) | (message.search('Peso') > -1) | (message.search('Data') > -1) ? <Text style={styles.text}>{message}</Text> : null}


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
