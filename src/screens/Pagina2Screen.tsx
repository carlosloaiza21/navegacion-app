import React from 'react'
import { Button, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { styles } from '../theme/theme';

interface Props extends NativeStackScreenProps<any, any>{}

export const Pagina2Screen = ({navigation}:Props) => {

  return (
    <View style={styles.globalMArgin}>
        <Text style={styles.title}>Pagina2Screen</Text>
        <Button
            title='Pagina3'
            onPress={()=>navigation.navigate('Pantalla 3',{})}
        />
    </View>
  )
}
