import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lista: [
        { id: '1', nome: 'Fernando', idade: 48, sexo: 'Masculino' },
        { id: '2', nome: 'Vanessa', idade: 45, sexo: 'Feminino' },
        { id: '3', nome: 'João', idade: 24, sexo: 'Masculino' },
        { id: '4', nome: 'Valentina', idade: 21, sexo: 'Feminino' },
        { id: '5', nome: 'Alice', idade: 0, sexo: 'Feminino' },
        { id: '6', nome: 'Natasha', idade: 7, sexo: 'Feminino' },
        { id: '7', nome: 'Paçoca', idade: 4, sexo: 'Masculino' },
        { id: '8', nome: 'Coxinha', idade: 1, sexo: 'Feminino' },
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.cabecalho}> LISTA DE MORADORES </Text>

        <FlatList
          keyExtractor={(item) => item.id}
          data={this.state.lista}
          renderItem={({ item }) => <Morador data={item} />}
        />
        <View style={styles.areaRodape}>
        <Text style={styles.rodape}>
          executado por MSW
        </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  cabecalho: {
    fontSize: 25,
    color: 'black',
    paddingTop: 5,
    backgroundColor: 'blue',
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  morador: {
    
    padding: 10,
    color: 'white',
    height: 250,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 20,
  },
  textoMorador: {
    fontSize: 14,
    fontStyle: 'italic',
    color: 'black',
  },
  rodape:{
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'right',
    color:'blue',
  },
  areaRodape:{
    backgroundColor:'black'
  }
});

class Morador extends Component {
  render() {
    return (
      <View style={styles.morador}>
        <Text style={styles.textoMorador}>
          Nome: {this.props.data.nome},  
          Idade: {this.props.data.idade}, 
          Sexo: {this.props.data.sexo}
          
        </Text>
      </View>
    );
  }
}

export default App;