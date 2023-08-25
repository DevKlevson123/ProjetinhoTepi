import React, { useState }  from 'react';
import { Alert, Button, FlatListComponent, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons, AntDesign } from 'react-native-vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePicker from '@react-native-community/datetimepicker'

export default function Form(props){
    const [nomeAtividade, setnomeAtividade] = useState('')
    const [descricaoAtividade, setdescriçãoAtvidade] = useState('')
    const [Satisfacao, setSatisfacao] = useState('')
    const [Data, setData] = useState(new Date(Date.now()))
    const [show, setShow] = useState(false)
    const Dados = {
      nome: nomeAtividade,
      descricao : descricaoAtividade,
      data: Data
    }

    const onChange = (event, value) => { 
      setData(value);
      if(Platform.OS === 'android'){
        setShow(false)
      }
      
    };

    const mostrarPicker = () => {
      setShow(true)
    }

    function adcionaTarefa(){
      const salvar = async Dados => {
        try {
          await AsyncStorage.setItem("Task", JSON.stringify(Dados))
        } catch (error) {
          console.log(error.message)
        }
      } 
    }
    return (
      <View style={styles.container}>
        <View style={styles.Modal}>
          <Text style={styles.Text}>Nome Atividade</Text>
          <TextInput
            placeholder="Nome Atividade"
            onChangeText={(texto) => setnomeAtividade(texto)}
            style={styles.Input}
          ></TextInput>

          <Text style={styles.Text}>descrição da Atividade </Text>
          <TextInput
            placeholder="descrição Atividade"
            style={styles.Input}
            onChangeText={(texto) => setdescriçãoAtvidade(texto)}
          ></TextInput>
          <View style={styles.Calendar}>
            <Text style={styles.Calendar}>Data:</Text>
            <TouchableOpacity
              style={styles.Calendar}
              onPress={mostrarPicker}
            >
              <AntDesign name="calendar" size={25} color="#fff"/>
            </TouchableOpacity>
          </View>
          {show && (
            <DateTimePicker
              testID="DateTimerPicker"
              style={styles.Input}
              value={Data}
              mode={'date'}
              display={Platform.OS === 'ios'? 'inline' : 'default' }
              onChange={onChange}
            />
          )}
          <Text style={styles.Text}></Text>

          <View style={styles.Btn}>
            <TouchableOpacity
              style={{ marginRight: 15 }}
              onPress={adcionaTarefa}
            >
              <AntDesign name="plus" size={45} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={props.fechar}>
              <Ionicons name="exit-outline" size={45} color="#fff" />
            </TouchableOpacity>
          </View>
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
      height: 480,
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
    },
    Btn: {
      marginTop: 15,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row'
    },
    Calendar: {
      alignItems: 'flex-start',
      flexDirection: 'row',
      
      color: '#fff',
      marginLeft: 10,
      marginTop: 10
    }
});