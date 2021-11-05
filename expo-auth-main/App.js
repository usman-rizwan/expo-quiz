import React from 'react';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Forgot from './screens/Forgot';
import Newpass from './screens/Newpass';
import Home from './screens/Home';
import Quiz from './screens/Quiz';
import Result from './screens/Result';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();



function App() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Forgot" component={Forgot} />
      <Stack.Screen name="Newpass" component={Newpass} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Quiz" component={Quiz} />
      <Stack.Screen name="Result" component={Result} />
    </Stack.Navigator>
  );
}


export default () => {
  return (
    <NavigationContainer>
     
        <App />
      
    </NavigationContainer>
  )
}