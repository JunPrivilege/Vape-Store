import { View, Text} from 'react-native'
import React from 'react'
import Datadiri from './components/Datadiri'
import Junstore from './components/Vapestore'
import Login from './components/Loginscreen'
import Splashscreen from './components/Splashscreen'
import Searchpage from './components/Searchpage'
import Registscreen from './components/Registscreen'
import Loginscreen from './components/Loginscreen'
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import  Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptions ={
  tabBarShowLabel : false,
  headerShown : false,
  tabBarStyle : {
    height : 50,
    backgroundColor:'#808080',
    borderTopRightRadius:18,
    borderTopLeftRadius:18,
  }
}

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen 
      name="Home" component={Junstore} 
      options={{
        tabBarIcon: ({ focused }) => (
          <Icon name={focused ? 'home' : 'home-outline'} size={30} color='white'/>
        )
      }} />

      <Tab.Screen
      name="Search" component={Searchpage} 
      options={{
        tabBarIcon: ({ focused }) => (
          <Ionicons name={focused ? 'search' : 'search-outline'} size={30} color='white'/>
        )
      }} />

      <Tab.Screen 
      name="Login" component={Login} 
      options={{
        tabBarIcon: ({ focused }) => (
          <Icon name={focused ? 'account' : 'account-outline'} size={30} color='white'/>
        )
      }} />
      
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Splashscreen" 
      screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splashscreen" component={Splashscreen}/>
        <Stack.Screen name="Registscreen" component={Registscreen}/>
        <Stack.Screen name="Loginscreen" component={Loginscreen}/>
        <Stack.Screen name="Searchpage" component={Searchpage}/>
        <Stack.Screen name="MyTabs" component={MyTabs}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App