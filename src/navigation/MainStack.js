import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Auth/Login';
import Splash from '../screens/Splash';

import {routeName} from '../config/RouteName';
import SignUp from '../screens/Auth/SignUp';
import Welcome from '../screens/Auth/Welcome';
import Reminder from '../screens/Auth/Reminder';
import Home from '../screens/Home/Home';
import Sleep from "../screens/Home/Sleep";

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName={routeName.SPLASH} headerMode={'none'}>
      <Stack.Screen name={routeName.SPLASH} component={Splash} />
      <Stack.Screen name={routeName.LOGIN} component={Login} />
      <Stack.Screen name={routeName.SIGN_UP} component={SignUp} />
      <Stack.Screen name={routeName.WELCOME} component={Welcome} />
      <Stack.Screen name={routeName.REMINDER} component={Reminder} />
      <Stack.Screen name={routeName.HOME} component={Home} />
      <Stack.Screen name={routeName.SLEEP} component={Sleep} />
    </Stack.Navigator>
  );
};

export default MainStack;
