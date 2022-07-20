import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

// import Colors from '../constants/Colors';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import SearchScreen from '../screens/SearchScreen';
import BoardScreen from '../screens/BoardScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from '../types';

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const SearchStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="SearchStack"
      component={SearchScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

const BoardStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="BoardStack"
      component={BoardScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

const ProfileStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="ProfileStack"
      component={ProfileScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: '#2f95dc',
      }}
    >
      <Tab.Screen name="Search" component={SearchStackNavigator} />
      <Tab.Screen name="Board" component={BoardStackNavigator} />
      <Tab.Screen name="Profile" component={ProfileStackNavigator} />
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

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
