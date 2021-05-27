import React from "react";
import{createStackNavigator} from '@react-navigation/stack';
import {Ionicons} from '@expo/vector-icons';
import {Button} from 'react-native';
import About from '../Screen/About';

const Stack = createStackNavigator();
const AboutStack = ({navigation}) => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='About' component={About} options={{
          headerLeft: () => (
           <Ionicons onPress={() => navigation.goBack()} name='md-arrow-back-circle' color='black' size={35} />),
          title: 'ABOUT',
          headerTitleStyle: { fontFamily: 'georgia', fontSize: 25},
          headerTintColor: 'black',
          headerStyle: { backgroundColor: '#DCDCDC' }
          }}/>
        </Stack.Navigator>   
  );
};

export default AboutStack;