import React  from 'react';
import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, MaterialIcons, Ionicons } from 'react-native-vector-icons';

import ModifyTask from './src/ModificarTarefa';
import ViewTask from './src/VisualizarTarefa/index'
export default function App() {

    const Tab = createBottomTabNavigator();
    return (

      <NavigationContainer style = {styles.container}>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#303030',
            tabBarStyle:{
              backgroundColor: "#848081",
              border: 0, 
            }
          }}
        >
          <Tab.Screen name='AddTask' component={ModifyTask} options={{tabBarIcon: ({focado}) => (<Text><MaterialIcons name='add-task' size= {20} color='#000'/></Text>)}} />
          <Tab.Screen name='viewTask' component={ViewTask} options={{tabBarIcon: ({focado}) => (<Text><FontAwesome name='tasks' size= {20} color='#000'/></Text>)}}/>
        </Tab.Navigator>
      </NavigationContainer>
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
    color: '#fff'
  },
  Modal: {
    alignItems: 'center',
    backgroundColor: '#bbb',
    width:'95%',
    height: 400,
    borderRadius: 10
  },
  Input: {
    marginTop: 40,
    backgroundColor: '#FFF',
    width: 250,
    borderRadius: 5,
    borderColor: '#000'
  }
});
