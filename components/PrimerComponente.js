import React from 'react';
import {Text, StyleSheet, View} from 'react-native'

const otroTexto = "String a mostrar";

const Primercomponente = ()=> {
    return (
    <View>
        <Text style = {estilo.textStyle} > EL primer componente</Text>
        <Text style = {estilo.textStyle} >{otroTexto}</Text>
    </View>
    );
    
};

const estilo = StyleSheet.create({
    textStyle:{
        fontSize:30
    }
});

export default Primercomponente;



