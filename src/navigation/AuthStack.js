import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/splash/Splash';
import Onboarding from '../screens/onboarding/Onboarding';
import Signin from '../screens/login/Signin';
import Signup from '../screens/signup/Signup';
import PhoneVerification from '../screens/phoneverification/PhoneVerification';
import TabNavigator from './TabNavigator';
import OneTimePassword from '../screens/onetimepassword/OneTimePassword';
import Onboarding1 from '../screens/onboarding/Onboarding1';
import Onboarding2 from '../screens/onboarding/Onboarding2';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Onboarding1" component={Onboarding1} />
      <Stack.Screen name="Onboarding2" component={Onboarding2} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="OneTimePassword" component={OneTimePassword} />
      <Stack.Screen name="PhoneVerification" component={PhoneVerification} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
    </Stack.Navigator>
  );
}
export default AuthStack;
