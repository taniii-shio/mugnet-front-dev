import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BoardScreen from '../screens/BoardScreen';

import { RootStackParamList } from '../types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function BoardStackNavigator() {
  return (
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
}
