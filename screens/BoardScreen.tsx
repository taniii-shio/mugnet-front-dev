import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import Header from '../components/Header';
import allPosts from '../assets/data/allPosts';
import colors from '../assets/colors/colors';
import { RootTabScreenProps } from '../types';

export default function BoardScreen({
  navigation,
}: RootTabScreenProps<'BoardStack'>) {
  const renderPostItem = ({ item, index }: any) => {
    return (
      <View>
        <TouchableOpacity></TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* header */}
      <Header />

      <Text style={styles.title}>掲示板</Text>
      <FlatList
        data={allPosts}
        renderItem={renderPostItem}
        keyExtractor={(item: any) => item._id}
        showsVerticalScrollIndicator={false}
      ></FlatList>

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
});
