import React  from 'react';
import { Button, FlatList, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import {ListTarefas} from '../Form/index'

export default function ViewTask(){
    return(
      <View style={styles.container}>
        <StatusBar backgroundColor="#000"/>
        <Text style={styles.TextTitulo}>Tarefas</Text>
        <View>
          {ListTarefas.map((todo) => {
            return(
              <View style={styles.Visual}>
                <Text style={styles.Text}>nome: {todo.nomeAtividade}</Text>
                <Text style={styles.Text}>descrição: {todo.descricaoAtividade}</Text>
                <Text style={styles.Text}>satifação: {todo.Satisfacao}</Text>
              </View>
            )
          })}
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#636061',
      alignItems: 'center',
      justifyContent: 'center',
    },
    TextTitulo: {
      color: '#fff',
      fontSize:25,
      fontWeight:'bold',
      marginBottom: 40,
      
    },
    Text: {
      color: '#fff',
      marginLeft: 16,
    },
    Visual: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        height: 100,
        width: 200,
        borderRadius: 10,
        backgroundColor: '#bbb',
    },
  });
