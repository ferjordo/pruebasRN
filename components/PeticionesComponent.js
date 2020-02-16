import React, {Component} from 'react';
import { StyleSheet, Text,  TouchableOpacity, Alert, ActivityIndicator, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default class PeticionesComponent extends Component {
    constructor(props){
        super(props);
        this.peticionPost = this.peticionPost.bind(this);
        this.EnviarPeticion  = this.EnviarPeticion.bind(this);
        this.mostrarAlert = this.mostrarAlert.bind(this);
        this.state ={ isLoading: false
        }
    }

    render (){
      if(this.state.isLoading){
        return(
          <View style={{flex: 1, padding: 20}}>
            <ActivityIndicator/>
          </View>
        )
      }
        return (
          <View>
            <TouchableOpacity
            style={estilo.buttom}
            onPress = {this.EnviarPeticion}
            ><Text>Enviar peticion</Text>
            </TouchableOpacity>
           <FlatList
           data={this.state.movies}
        renderItem = {({item}) => {return <Text>{item.id}</Text>}}
        keyExtractor={({id}, index) => id}
           />
            </View>
        );
            }
EnviarPeticion(){
  this.setState({
    isLoading:true
  })
 return fetch('https://facebook.github.io/react-native/movies.json')
  .then((response) => response.json())
  .then((responseJson) => {
    this.setState({
      movies : responseJson.movies,
      isLoading : false

    })
  })
  .catch((error) => {
    console.error(error);
  });
            }
mostrarAlert(Movies){
Alert.alert('Movies', Movies)
}
peticionPost(){
    fetch('https://jsonplaceholder.typicode.com/todos/',{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        var1 : 'var1',
        var2 : 'var2',
      })
    });
  }



}
const estilo = StyleSheet.create({
    buttom : {
        margin: 20,
        backgroundColor:'#ccc',
        alignItems: 'center',
      padding:10 
    }
});