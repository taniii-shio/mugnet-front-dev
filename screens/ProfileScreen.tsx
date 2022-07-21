import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import colors from '../constants/colors';

import { RootTabScreenProps } from '../types';

export default function ProfileScreen({
  navigation,
}: RootTabScreenProps<'Profile'>) {
  return (
    <View style={styles.container}>
      {/* header */}
      <Header />

      <Text style={styles.title}>ProfileScreen</Text>
      <View style={styles.separator} />
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
