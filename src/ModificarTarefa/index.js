import React, { useState } from 'react';
import { Modal, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
import { FontAwesome, MaterialIcons} from 'react-native-vector-icons';

import Form from '../Form/index'

export default function ModifyTask(){
    const [visualizarModal, setVisualizarModal] = useState(false);
    
    function abrirModal(){
      setVisualizarModal(true);
    }

    function fecharModal(){
      setVisualizarModal(false)
    }

    return(
      <View style = {styles.container}>
        <StatusBar backgroundColor="#000"/>

        <TouchableOpacity
          onPress={abrirModal}
        >
          <FontAwesome name='plus-square-o' size={100} color='#fff' marginRight={10}/>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={abrirModal}
        >
          <MaterialIcons name='delete-outline' size={100} color='#fff' marginLeft={10}/>
        </TouchableOpacity>

        <Modal transparent={true} animationType='slide' visible={visualizarModal}>
          <Form fechar={fecharModal}/>
        </Modal>
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
});