import React from 'react'
import {
  Login, 
  Register,
  Junstore,
  Searchpage,
  Splashscreen} from './components/index'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabNavigation from './src/routes/TabNavigation'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Splash" 
      screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splashscreen}/>
        <Stack.Screen name="Regist" component={Register}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Search" component={Searchpage}/>
        <Stack.Screen name="Home" component={Junstore}/>
        <Stack.Screen name="MainApp" component={TabNavigation}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App