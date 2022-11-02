import * as React from 'react';
import { Text, View, StyleSheet, Navigator, Screen } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from './screens/Home'
import Quiz_beginner from './screens/Quiz_beginner'
import Kind from './screens/Kind'
import Stage from './screens/Stage'
import Level from './screens/Level'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Kind" component={Kind} />
        <Stack.Screen name="Quiz_beginner" component={Quiz_beginner} />
        <Stack.Screen name="Stage" component={Stage} />
        <Stack.Screen name="Level" component={Level} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
