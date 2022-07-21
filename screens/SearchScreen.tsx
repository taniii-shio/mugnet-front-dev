import { StyleSheet, View } from 'react-native';
import Header from '../components/Header';
import colors from '../constants/colors';

import { RootTabScreenProps } from '../types';

export default function SearchScreen({
  navigation,
}: RootTabScreenProps<'Search'>) {
  return (
    <View style={styles.container}>
      {/* header */}
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
