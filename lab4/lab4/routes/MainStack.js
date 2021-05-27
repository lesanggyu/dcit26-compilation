import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import{createDrawerNavigator} from '@react-navigation/drawer';
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
    <Drawer.Navigator drawerStyle={{ width: 200, backgroundColor: '#FFF0F5' }}
      drawerContentOptions={{ activeTintColor: 'black', labelStyle: {fontFamily: 'georgia', fontSize: 18} }}>

    <Drawer.Screen name='Home' component={HomeStack} options={{ title:'HOME', drawerIcon: () => (
      <Ionicons name='home' size={30} color='black' />
      )}}/>

    <Drawer.Screen name='About' component={AboutStack} options={{ title: 'ABOUT', drawerIcon: () => (
      <Ionicons name='information-circle' size={30} color='black' />
      )}}/>

    </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;