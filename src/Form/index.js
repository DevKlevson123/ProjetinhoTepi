import React, { useState }  from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Slider from '@react-native-community/slider';
import { Ionicons } from 'react-native-vector-icons';

export default function Form(props){
    const[valorSatisfacao, setvalorSatisfacao] = useState(0)
    return(
      <View style={styles.container}>
        <View style={styles.Modal}>
          <Text style={styles.Text}>Nome Atividade</Text>
          <TextInput placeholder='Nome Atividade' style={styles.Input}></TextInput>
          <Text style={styles.Text}>descrição da Atividade</Text>
          <TextInput placeholder='descrição Atividade' style={styles.Input}></TextInput>
          <Text style={styles.Text}>Satifação {valorSatisfacao}</Text>
          <Slider
            minimumValue={0}
            maximumValue={10}
            value={valorSatisfacao}
            onValueChange= {(valor) => setvalorSatisfacao(valor.toFixed(0))}
            minimumTrackTintColor= "#008000"
            maximumTrackTintColor= "#ff0000"
            thumbTintColor={valorSatisfacao>=6? "#008000": "#ff0000"}
            style={styles.Slider}
          ></Slider>

          <TouchableOpacity
          onPress={ props.fechar}
          style={{alignItems: 'center'}}
          >
            <Ionicons name='exit-outline' size={45} color='#fff' marginTop={25} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#636061',
      alignItems: 'center',
      justifyContent: 'center',
    },
    Text: {
      color: '#fff',
      fontSize: 14,
      paddingBottom: 2,
      marginLeft: 16,
      marginTop: 20
    },
    Modal: {
      backgroundColor: '#bbb',
      width:'95%',
      height: 400,
      borderRadius: 10
    },
    Input: {
      alignItems: 'flex-start',
      backgroundColor: '#FFF',
      width: 200,
      marginLeft: 12,
      borderRadius: 5,
      borderColor: '#000'
    },
    Slider: {

      alignItems: "flex-start",
      width: 200,
    }
});