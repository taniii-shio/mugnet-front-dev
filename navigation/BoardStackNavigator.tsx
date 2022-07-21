import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BoardScreen from '../screens/BoardScreen';
import PostDetailScreen from '../screens/PostDetailScreen';

import { RootStackParamList } from '../types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function BoardStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Board" component={BoardScreen} options={{}} />
      <Stack.Screen
        name="PostDetail"
        component={PostDetailScreen}
        options={{}}
      />
    </Stack.Navigator>
  );
}
