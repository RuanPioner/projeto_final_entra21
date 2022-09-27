import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import jwt_decode from "jwt-decode";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Toast from 'react-native-toast-message'
import Teste from './src/componentes/Teste';
import Login from './src/componentes/Login';
import CadastroUsuarios from './src/componentes/CadastroUsuario';
import Medicos from './src/componentes/Medicos';
import EditarMedicos from './src/componentes/EditarMedicos';
import CadastroDadosPessoais from './src/componentes/CadastroDados'
import Home from './src/componentes/Home';
import CadastroMedicos from './src/componentes/cadastroMedicos';



const Stack = createStackNavigator();


export default function App() {
  const [id, setId] = useState('')
  
//   React.useEffect(() => {
//     decodificaToken()
//   }, [id])
  
//   async function decodificaToken(){
//     var token = await AsyncStorage.getItem('login')
//     if(token != null){
//       var token_decode = await jwt_decode(token)
//       setId (token_decode.id)
//   }
// }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Teste">
        <Stack.Screen 
        name="Teste" 
        component={Teste} 
        options={{
          title: 'Teste de Rotas',
          headerStyle:{
            backgroundColor: '#121212'
          },
          headerTintColor: '#FFF'

        }}
        />
   
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={CadastroUsuarios} />
        <Stack.Screen name="Cadastrar Medicos" component={CadastroMedicos} />
        <Stack.Screen name="Dados Pessoais" component={CadastroDadosPessoais} />
        <Stack.Screen name="Home" component={Home} />
       
      </Stack.Navigator>
     <Toast/>
    </NavigationContainer>
  );
}