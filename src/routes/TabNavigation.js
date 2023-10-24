import React from 'react';
import {Junstore, Login, Searchpage} from '../../components/index';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../constant/Colors';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    height: 50,
    backgroundColor: Colors.primary,
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
  },
};

function TabNavigation() {
  
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={Junstore}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name={focused ? 'home' : 'home-outline'}
              size={30}
              color="white"
            />
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={Searchpage}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={focused ? 'search' : 'search-outline'}
              size={30}
              color="white"
            />
          ),
        }}
      />

      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name={focused ? 'account' : 'account-outline'}
              size={30}
              color="white"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;
