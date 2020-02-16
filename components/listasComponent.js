import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';


const Listas = () => {
    const friends = [
        {name : "Fernando #1"},
        {name : "Fernando #2"},
        {name : "Fernando #3"},
        {name : "Fernando #4"}
    ];
    return (<View>
        <FlatList 
        data={friends}
        renderItem= {
            ({item}) =>{return <Text>{item.name}</Text>}}
            keyExtractor={(item, index) => index.toString()}
            
        /></View>
    );
};

const estilos = StyleSheet.create({
    stilosLista:{
        
    }
});

export default Listas;