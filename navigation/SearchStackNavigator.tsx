import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from '../screens/SearchScreen';
import RecommendUserDetailScreen from '../screens/RecommendUserDetailScreen';

import { RootStackParamList } from '../types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function SearchStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RecommendUserDetial"
        component={RecommendUserDetailScreen}
        options={{}}
      />
    </Stack.Navigator>
  );
}
