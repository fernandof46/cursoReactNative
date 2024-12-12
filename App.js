import React, { Component } from "react"; // sempre importar as bibliotecas
import { View, Text, StyleSheet, FlatList } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        { id: '1', nome: 'Alice', idade: 1, email: 'alice@alice.com' },
        { id: '2', nome: 'Sol', idade: 45, email: 'sol@sol.com' },
        { id: '3', nome: 'Fernando', idade: 48, email: 'fernando@fernando.com' },
        { id: '4', nome: 'João', idade: 24, email: 'joao@joao.com' },
        { id: '5', nome: 'Valentina', idade: 21, email: 'valentina@valentina.com' },
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.feed}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Pessoa data={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  pessoa: {
    marginBottom: 10,
    padding: 15,
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
  }
});

class Pessoa extends Component {
  render() {
    return (
      <View style={styles.pessoa}>
        <Text style={styles.text}>Nome: {this.props.data.nome}</Text>
        <Text style={styles.text}>Idade: {this.props.data.idade}</Text>
        <Text style={styles.text}>Email: {this.props.data.email}</Text>
      </View>
    );
  }
}

export default App; // envia app para o <emulador>