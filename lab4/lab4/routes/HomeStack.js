import React from "react";
import{createStackNavigator} from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import Home from '../Screen/Home';
import Profile from '../Screen/profile';

const Stack = createStackNavigator();
const HomeStack = ({navigation}) => {

  return (
    <Stack.Navigator>
    <Stack.Screen name='HOME' component={Home} options={{
        headerLeft: () => (
          <Ionicons onPress={() => navigation.toggleDrawer()} name='menu' color='white' size={35}/>),
        headerTitleStyle: { fontFamily: 'georgia', fontSize: 25},
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'black' }}}/>

    <Stack.Screen name='Profile' component={Profile} options={{
      headerTitleStyle: { fontFamily: 'georgia', fontSize: 25},
      headerTintColor: 'white',
      headerStyle: { backgroundColor: 'black' }}}/>
    </Stack.Navigator>
  );
}
export default HomeStack;