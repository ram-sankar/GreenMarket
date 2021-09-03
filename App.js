import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NavigationTheme from "./navigator/NavigationTheme";
import Welcome from './screens/Welcome'
import Login from './screens/Login'
import Home from './screens/Home';

const Stack = createNativeStackNavigator();

export default function App({navigation}) {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
