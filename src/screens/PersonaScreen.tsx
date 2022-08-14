import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/theme';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootParams } from '../navigator/StackNavigator';

interface Props extends NativeStackScreenProps<RootParams, 'PersonaScreen'>{}

export const PersonaScreen = (props:Props) => {
    console.log(props)
  return (
    <View style={styles.globalMArgin}>
        <Text style={styles.title}>PersonaScreen</Text>
        <Text>{props.route.params.id}</Text>
        <Text>{props.route.params.name}</Text>
    </View>
  )
}
