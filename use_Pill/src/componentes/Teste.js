import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Teste({ navigation }) {
  return (
    <View >
      <Text>Página de Teste</Text>



      <Button
        style
        title='Login'
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        style
        title='Cadastro Usuario'
        onPress={() => navigation.navigate('Cadastro')}
      />
      <Button
        style
        title='Cadastro de Medicos'
        onPress={() => navigation.navigate('Cadastrar Medicos')}
      />

      <Button
        style
        title='Cadastro Dados'
        onPress={() => navigation.navigate('Dados Pessoais')}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 20,
  }
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
