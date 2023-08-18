import React, { useState }  from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { Picker } from '@react-native-picker/picker';

export default function Form(props){
    const[nomeAtividade, setnomeAtividade] = useState('')
    const[descricaoAtividade, setdescriçãoAtvidade] = useState('')
    const[Satisfacao, setSatisfacao] = useState('')

    return(
      <View style={styles.container}>
        <View style={styles.Modal}>
          <Text style={styles.Text}>Nome Atividade</Text>
          <TextInput 
            placeholder='Nome Atividade' 
            onChangeText={(texto) => setnomeAtividade(texto)}
            style={styles.Input}
            ></TextInput>

          <Text style={styles.Text}>descrição da Atividade </Text>
          <TextInput 
          placeholder='descrição Atividade' 
          style={styles.Input}
          onChangeText={(texto) => setdescriçãoAtvidade(texto)}
          ></TextInput>

          <Text style={styles.Text}>Satifação</Text>
          <View style={styles.Picker}>
            <Picker 
              style={{width: 200, height: 50}}
              selectedValue={Satisfacao}
              onValueChange={(intemValue) => setSatisfacao(intemValue)}
            >
              <Picker.Item label='Ruim' value='Ruim'/>
              <Picker.Item label='Médio' value='Médio'/>
              <Picker.Item label='Bom' value='Bom'/>
              <Picker.Item label='Muito Bom' value='Muito Bom'/>
            </Picker>
          </View>

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
    Picker: {
      alignItems: 'flex-start',
      marginLeft: 14,
      backgroundColor: '#fff',
      color: '#000',
      width: 200,
      borderRadius: 2000,
    }
});