import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import splash from "./src/screens/Splash";
import Registration from "./src/screens/Registration";
import Dashboard from "./src/screens/Dashboard";
import Login from "./src/screens/Login";
import OTPVerification from "./src/screens/OTPVerification";
import Advertisement from "./src/screens/Advertisement";


const Stack = createStackNavigator();

export default class App extends Component {

  render() {
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="splash">

          <Stack.Screen name="splash" component={splash} options={{ headerShown: false }} />
          <Stack.Screen name="Registration" component={Registration} options={{ headerShown: false }} />
          <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="OTPVerification" component={OTPVerification} options={{ headerShown: false }} />
          <Stack.Screen name="Advertisement" component={Advertisement} options={{ headerShown: false }} />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
