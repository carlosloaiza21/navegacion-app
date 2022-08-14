import React from 'react'
import { Text, View, Button, TouchableOpacity } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type {DrawerScreenProps} from '@react-navigation/drawer'
import { styles } from '../theme/theme';
import { RootParams } from '../navigator/StackNavigator';
import { useEffect } from 'react';

interface Props extends DrawerScreenProps<RootParams, 'PersonaScreen'>{}

export const Pagina1Screen = ({navigation}:Props) => {

  useEffect(()=>{
      navigation.setOptions({
          headerLeft:()=>(
            <Button
                title="menu"
                onPress={()=>{navigation.openDrawer()}}
            />
        )
      })
  },[])

  return (
    <View style={styles.globalMArgin}>
        <Text style={styles.title}>Pagina 1</Text>
        <Button
            title='Pagina 2'
            onPress={()=>navigation.navigate('Pantalla 2')}
        />

        <Text>Navegacion con argumentos</Text>

        <TouchableOpacity
            onPress={()=>navigation.navigate('PersonaScreen',{
                id:1,
                name:'carlos'
            })}
        >
            <Text>Carlos</Text>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={()=>navigation.navigate('PersonaScreen',{
                id:3,
                name:'carlos'
            })}
        >
            <Text>Carlos</Text>
        </TouchableOpacity>




    </View>
  )
}

