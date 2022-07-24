import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import colors from '../constants/colors';

import { RootTabScreenProps } from '../types';

export default function BoardScreen({
  navigation,
}: RootTabScreenProps<'BoardStack'>) {
  return (
    <View style={styles.container}>
      {/* header */}
      <Header />

      <Text style={styles.title}>BoardScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('PostDetail')}>
        <Text>Click me</Text>
      </TouchableOpacity>
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
