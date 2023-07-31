import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/navigation/RootNavigation';
import AuthStack from './src/navigation/AuthStack';
import AppStack from './src/navigation/AppStack';
import TabNavigator from './src/navigation/TabNavigator';

function App() {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}

export default App;

// App.js

// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import SignIn from './src/screens/login/Signin'; // Assuming you have a SignIn screen for authentication
// import TabNavigator from './src/navigation/TabNavigator';

// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName="SignIn" // Set the initial route to SignIn
//         screenOptions={{headerShown: false}}>
//         <Stack.Screen name="SignIn" component={SignIn} />
//         <Stack.Screen name="MainApp" component={TabNavigator} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;
