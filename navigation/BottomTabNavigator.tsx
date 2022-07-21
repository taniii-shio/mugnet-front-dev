import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SearchStackNavigator from './SearchStackNavigator';
import BoardStackNavigator from './BoardStackNavigator';
import ProfileStackNavigator from './ProfileStackNavigator';

import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { RootTabParamList } from '../types';

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="SearchStack"
      screenOptions={{
        tabBarActiveTintColor: '#000',
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="SearchStack"
        component={SearchStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="magnifying-glass" size={28} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="BoardStack"
        component={BoardStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="bulletin-board"
              size={28}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-alt" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
