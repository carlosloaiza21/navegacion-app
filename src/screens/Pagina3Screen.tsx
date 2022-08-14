import React from 'react'
import { Button, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { styles } from '../theme/theme';
interface Props extends NativeStackScreenProps<any, any>{}

export const Pagina3Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMArgin}>
        <Text style={styles.title}>Pagina3Screen</Text>
        <Button
            onPress={()=>navigation.pop()}
            title="regresar"
        />

        <Button
            onPress={()=>navigation.popToTop()}
            title="ir a home"
        />
    </View>
  )
}
