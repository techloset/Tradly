import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

function RootNavigation(props) {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
    </Stack.Navigator>
  );
}

export default RootNavigation;
