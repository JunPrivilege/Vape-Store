import React from 'react';
import {
  Login,
  Register,
  Junstore,
  Searchpage,
  Splashscreen,
} from '../../components/index';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from '../routes/TabNavigation'

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={
        {headerShown: false}
        }>
      <Stack.Screen name="Splash" component={Splashscreen} />
      <Stack.Screen name="Regist" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Search" component={Searchpage} />
      <Stack.Screen name="Home" component={Junstore} />
      <Stack.Screen name="MainApp" component={TabNavigation} />
    </Stack.Navigator>
  );
}

export default Router;
