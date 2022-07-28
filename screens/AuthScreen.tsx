import { StyleSheet, Text, View } from 'react-native';

import colors from '../assets/colors/colors';
import { RootTabScreenProps } from '../types';

export default function AuthScreen({
  navigation,
}: RootTabScreenProps<'AuthStack'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AuthScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
