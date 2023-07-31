import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Browse from '../screens/browse/Browse';
import MyStore from '../screens/store/MyStore';
import History from '../screens/profile/History';
import Prof from '../screens/profile/Prof';
import Home from '../assets/images/home.svg';
import Search from '../assets/images/Search.svg';
import Store from '../assets/images/Store.svg';
import Order from '../assets/images/Order.svg';
import Profile from '../assets/images/Profile.svg';
import Colors from '../assets/colors/Colors';
import AppStack from './AppStack';
import Fonts from '../components/Fonts';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.grey,
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: Fonts.medium,
        },
        tabBarStyle: [
          {
            display: 'flex',
          },
          null,
        ],
        tabBarOptions: {
          style: {
            paddingTop: Platform.OS === 'android' ? 8 : 0,
          },
        },
      }}>
      <Tab.Screen
        name="Dashboard"
        component={AppStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => <Home color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Browse"
        component={Browse}
        options={{
          tabBarLabel: 'Browse',
          tabBarIcon: ({color, size}) => <Search color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="MyStore"
        component={MyStore}
        options={{
          tabBarLabel: 'My Store',
          tabBarIcon: ({color, size}) => <Store color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({color, size}) => <Order color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Prof"
        component={Prof}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => <Profile color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
