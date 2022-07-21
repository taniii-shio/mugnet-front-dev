import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SearchStackNavigator from './SearchStackNavigator';
import BoardStackNavigator from './BoardStackNavigator';
import ProfileStackNavigator from './ProfileStackNavigator';

import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { RootTabParamList, RootTabScreenProps } from '../types';

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Search"
      screenOptions={{
        tabBarActiveTintColor: '#000',
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Search"
        component={SearchStackNavigator}
        options={({ navigation }: RootTabScreenProps<'Search'>) => ({
          tabBarIcon: ({ color }) => (
            <Entypo name="magnifying-glass" size={28} color={color} />
          ),
        })}
      />
      <Tab.Screen
        name="Board"
        component={BoardStackNavigator}
        options={({ navigation }: RootTabScreenProps<'Board'>) => ({
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="bulletin-board"
              size={28}
              color={color}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackNavigator}
        options={({ navigation }: RootTabScreenProps<'Profile'>) => ({
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-alt" size={24} color={color} />
          ),
        })}
      />
      {/* <Tab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'Tab One',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="info-circle"
                size={25}
                color={'#000'}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <Tab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      /> */}
    </Tab.Navigator>
  );
}
