import AsyncStorage from '@react-native-async-storage/async-storage';
import React  from 'react';
import { Button, FlatList, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';

export default function ViewTask(){
    
    const ListTarefas = async () => {
      let Task = [];
      try {
        Task = await AsyncStorage.getItem("Task")|| []
      } catch (error) {
        console.log(error.message)
      } return Task
    }

    return(
      <View style={styles.container}>
        <StatusBar backgroundColor="#000"/>
        <Text style={styles.TextTitulo}>Tarefas</Text>
        <View>
              <View style={styles.Visual}>
                <Text style={styles.Text}>nome: {ListTarefas.toString}</Text>
                <Text style={styles.Text}>descrição: {ListTarefas.length}</Text>
                <Text style={styles.Text}>satifação: {ListTarefas}</Text>
              </View>
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
