import React  from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';


export default function ViewTask(){

    return(
      <View style={styles.container}>
        <StatusBar backgroundColor="#000"/>
        <Text style={styles.Text}>Tela sobre</Text>
      </View>
    )
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
      color: '#fff'
    }
  });