import React, { useContext } from 'react';
import { Text, View } from 'react-native'
import { AuthContext } from '../context/AuthContext'



export const SettingsScreen = () => {

  const {authState} = useContext(AuthContext);



  return (
    <View>
        <Text>Settings</Text>
        <Text>
            {JSON.stringify(authState,null,4)}
        </Text>
    </View>
  )
}
