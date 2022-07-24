import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TextInput,
  Dimensions,
} from 'react-native';
import Header from '../components/Header';

import recommendUsers from '../assets/data/recommendUsers';
import colors from '../constants/colors';

import { RootTabScreenProps } from '../types';
import { Entypo } from '@expo/vector-icons';
import RecommendUserItem from '../components/RecommendUserItem';

const DeviceWidth = Dimensions.get('window').width;

export default function SearchScreen({
  navigation,
}: RootTabScreenProps<'SearchStack'>) {
  return (
    <View style={styles.container}>
      {/* header */}
      <Header />

      {/* recommend */}
      <View>
        <Text style={styles.recommendTitle}>おすすめの友達</Text>
        <View style={styles.recommendUsersWrapper}>
          <FlatList
            data={recommendUsers}
            renderItem={({ item, index }) => (
              <RecommendUserItem
                item={item}
                index={index}
                navigation={navigation}
              />
            )}
            keyExtractor={(item) => item._id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>

      {/* search */}
      <View style={styles.searchWrapper}>
        <Entypo
          name="magnifying-glass"
          size={24}
          color={colors.gray500}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.input}
          multiline={false}
          placeholder={'ユーザーIDから友達を検索'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  // recommend
  recommendTitle: {
    fontFamily: 'inter_semibold',
    fontSize: 22,
    color: colors.gray800,
    marginHorizontal: 16,
  },
  recommendUsersWrapper: {
    height: 520,
    marginTop: 24,
  },
  // search
  searchWrapper: {
    backgroundColor: colors.gray100,
    flexDirection: 'row',
    alignItems: 'center',
    width: DeviceWidth - 32,
    height: 48,
    borderRadius: 16,
    position: 'absolute',
    bottom: 16,
    marginHorizontal: 16,
  },
  searchIcon: {
    marginLeft: 16,
  },
  input: {
    fontFamily: 'inter_regular',
    fontSize: 18,
    color: colors.gray500,
    marginLeft: 8,
  },
});
