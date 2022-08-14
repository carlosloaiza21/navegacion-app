import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import Icon from 'react-native-vector-icons/EvilIcons'

import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/theme';
import { RouteProp } from '@react-navigation/core';

type RootParams = {
    "Tab1Screen": undefined,
    "Tab2Screen": undefined,
    "StackNavigator": undefined,

}

const Tab = createBottomTabNavigator<RootParams>();

export const Tabs = ()=> {
  return (
    <Tab.Navigator
        sceneContainerStyle={{
            backgroundColor:'white'
        }}
        screenOptions={({route})=>({
            tabBarIcon:({focused,color,size})=>{
                if(route.name==='Tab1Screen'){
                    return <Icon name='archive' size={30}/>
                }else if(route.name==='Tab2Screen'){
                    return <Icon name='arrow-left' size={30}/>
                }else{
                    return <Icon name='comment' size={30}/>
                }
            }
        })}
        /* screenOptions={{
            tabBarIcon:({focused})=>{
                console.log(focused)
                return <Icon name="credit-card" size={30} />
            },


            tabBarActiveTintColor:colores.primary,
            tabBarStyle:{
                borderTopColor:colores.primary,
                borderTopWidth:0,
                elevation: 0
            }
        }} */
    >
      <Tab.Screen name="Tab1Screen" component={Tab1Screen} />
      <Tab.Screen name="Tab2Screen" component={Tab2Screen} />
      <Tab.Screen name="StackNavigator" component={StackNavigator} />

    </Tab.Navigator>
  );
}