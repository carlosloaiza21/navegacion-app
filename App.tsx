import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { MenuLAteral } from './src/navigator/MenuLAteral';
import {LogBox } from 'react-native';
import { AuthProvider } from './src/context/AuthContext';
LogBox.ignoreLogs(['Reanimated 2']);

const App = () => {
    return (
        <NavigationContainer>
            <AppState>
                <MenuLAteral/>
            </AppState>

        </NavigationContainer>
    );
};

const AppState=({children}:any)=>{
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    )
}


export default App;
