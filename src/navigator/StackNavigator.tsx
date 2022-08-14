import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pagina1Screen } from '../screens/Pagina1Screen';
import { Pagina2Screen } from '../screens/Pagina2Screen';
import { Pagina3Screen } from '../screens/Pagina3Screen';
import { PersonaScreen } from '../screens/PersonaScreen';

export type RootParams = {
    'Pantalla 1': undefined;
    'Pantalla 2': undefined;
    'Pantalla 3': undefined;
    'PersonaScreen': {id:number, name:string};
}

const Stack = createNativeStackNavigator<RootParams>();

export const StackNavigator=() => {
  return (

      <Stack.Navigator
        screenOptions={{
            headerShadowVisible:false,
            contentStyle:{
               backgroundColor:'white'
            }


        }}
      >
        <Stack.Screen name="Pantalla 1" component={Pagina1Screen} options={{title:"Pagina1"}}/>
        <Stack.Screen name="Pantalla 2" component={Pagina2Screen} options={{title:"Pagina2"}}/>
        <Stack.Screen name="Pantalla 3" component={Pagina3Screen} options={{title:"Pagina3"}}/>
        <Stack.Screen name="PersonaScreen" component={PersonaScreen} options={{title:"Persona"}}/>

      </Stack.Navigator>

  );
}