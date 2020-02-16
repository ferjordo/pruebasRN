import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Text, View,  TouchableOpacity, TextInput, Alert } from 'react-native';
import Primercomponente from './components/PrimerComponente';
import Listas from './components/listasComponent';
import PeticionesComponent from './components/PeticionesComponent'
/*
obtener valores dentro de INPUT
crear el input
crear una funcion para el onChenge
Atrabapar los datos dentro de la funcion
Crear los estados "state"
crear un bind de la funcion

*/
  export  default class App extends Component {
    constructor(props){
      super(props)

      this.cambiarEstadoTexto = this.cambiarEstadoTexto.bind(this)
      this.MostrarAlerta = this.MostrarAlerta.bind(this)


    }

    state = {
      texto : 'El tecto q cambiara'
    }
    cambiarEstadoTexto(texto){
      this.setState({
        texto : texto
      })
    }
MostrarAlerta(){
  Alert.alert('Titulo ', 'Mensaje: '+this.state.texto)/// aletas
}

    render (){
      return (

        <View style={styles.container}>
        <Text>El primer cambio, REACT</Text>
        <Text> {this.state.texto}</Text>
        <Primercomponente></Primercomponente>
        <Listas></Listas>
        <TextInput
        style={styles.textsipusts}
        placeholder = "Texto a ingresar"
        onChangeText= {this.cambiarEstadoTexto}>
  
  
        </TextInput>
        <TouchableOpacity style={styles.button}
          onPress={this.MostrarAlerta}>
        <Text>Button</Text>
        
        </TouchableOpacity>
        <PeticionesComponent/>
      </View>
     
      );
    }
  }

/* Boton
  TouchableOpacity = etiqueta
   onPress = funciontion para llamar a la accion
*/
const textoInicial =()=> {
  return null
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  textsipusts:{
    fontSize: 20
  },
  button: {
    margin: 20,
    backgroundColor:'#ccc',
    alignItems: 'center',
  padding:10  }
});

