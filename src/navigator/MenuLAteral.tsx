import React from 'react';
import {createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerNavigationProp} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigator';
import {SettingsScreen} from '../screens/SettingsScreen';
import { Image, Text, useWindowDimensions, View, } from 'react-native';
import { styles } from '../theme/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Tabs } from './Tabs';

type RootParams = {
    "Tabs": undefined,
    'Settings': undefined,
}

interface Dw extends DrawerContentComponentProps {

}

const Drawer = createDrawerNavigator<RootParams>();

export const MenuLAteral = () => {

    const {width} = useWindowDimensions()

    return (
        <Drawer.Navigator
            drawerContent={(props)=> <MenuInterno {...props}/>}
            screenOptions={{
                drawerType: width>=780?'permanent':'front',
                drawerPosition: 'left',
                headerShown: false,
            }}>
            <Drawer.Screen name="Tabs" component={Tabs} />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
        </Drawer.Navigator>
    );
};

const MenuInterno = ({navigation}:DrawerContentComponentProps) =>{
    return (
        <DrawerContentScrollView>
            <View style={styles.avatarContainer}>
                <Image
                    source={{
                        uri:'https://i.pinimg.com/474x/f5/ab/64/f5ab64dc1fb42e71da337b6cae8ba7e8.jpg',
                    }}
                    style={styles.avatar}
                />
            </View>

            <View style={styles.menuContainer}>
                <TouchableOpacity style={styles.boton}
                    onPress={()=>navigation.navigate('Tabs')}
                >
                    <Text style={styles.TextoBottones}>Navegacion</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boton}
                    onPress={()=>navigation.navigate('Settings')}
                >
                    <Text style={styles.TextoBottones}>Ajustes</Text>
                </TouchableOpacity>
            </View>




        </DrawerContentScrollView>
    )
}