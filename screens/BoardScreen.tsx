import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from 'react-native';
import { RootTabScreenProps } from '../types';

export default function BoardScreen({
  navigation,
}: RootTabScreenProps<'Board'>) {
  return (
    <View style={styles.container}>
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
    alignItems: 'center',
    justifyContent: 'center',
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
