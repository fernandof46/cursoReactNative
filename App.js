import React, { Component } from "react"; // sempre importar as bibliotecas
import { View, Text, StyleSheet,TouchableOpacity} from 'react-native';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      //deve ser colocado tudo que é mutável
      numero:0,
      botao: 'VAI',
      ultimo: null

    };
    this.timer = null;
    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);
  }
  vai(){
    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;
      this.setState({botao: 'VAI'})
    } else{
      this.timer = setInterval(() => {
        this.setState({numero: this.state.numero + 0.1})
  
      }, 100);
      this.setState({botao: 'PARAR'});

    }
    
  }
  limpar(){
    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;
    }
     this.setState({
      
      ultimo:this.state.numero,
      numero: 0,
      botao: 'VAI'
    })

  }
  
   
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.timer}> {this.state.numero.toFixed(1)} </Text>

        <View style={styles.btnArea}>

          <TouchableOpacity style={styles.botao} onPress={this.vai}>
            <Text style={styles.btnTexto}>{this.state.botao}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao}onPress={this.limpar}>
            <Text style={styles.btnTexto}>Limpar</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.areaUltimo}>
         {<Text style={styles.textoTempo}>//renderização condicional
          {this.state.ultimo > 0 ? 'Ultimo tempo: ' + this.state.ultimo.toFixed(2) + 's': 's'}
            {/* Ultimo tempo: {this.state.ultimo.toFixed(2)} + 's' */}
          </Text> }
          

        </View>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor:'#00aeef'
 //margin negativo sobe o item
  },
  btnArea:{
    flexDirection: 'row',
    marginTop:70,
    height: 40
  },
  botao:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white',
    height: 40,
    margin: 20,
    borderRadius: 10
  },
  btnTexto:{
    justifyContent: 'center',
    fontSize:25,
    fontStyle:'italic',
    fontWeight:'bold',
    color:'#00aeef'    
  },
  timer:{
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize:90,
    fontWeight:'bold',
    fontStyle:'italic',
    color:'white'

  },
  textoTempo:{
    fontSize: 25,
    fontStyle:'italic',
    fontWeight:'bold',
    color:'white'

  },
  areaUltimo:{
    marginTop:40,

  }

});

export default App; // envia app para o <emulador>