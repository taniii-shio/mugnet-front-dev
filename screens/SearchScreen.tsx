import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Dimensions,
} from 'react-native';
import Header from '../components/Header';

import recommendUsers from '../assets/data/recommendUsers';
import colors from '../constants/colors';

import { RootTabScreenProps } from '../types';
import { Entypo } from '@expo/vector-icons';

const DeviceWidth = Dimensions.get('window').width;

export default function SearchScreen({
  navigation,
}: RootTabScreenProps<'SearchStack'>) {
  const renderRecommendUserItem = ({ item, index }: any) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('RecommendUserDetial', item)}
      >
        <ImageBackground
          source={item.profilePicture}
          style={[
            styles.recommendUserItem,
            { marginLeft: index === 0 ? 16 : 0 },
          ]}
          imageStyle={styles.recommendUserItemImage}
        />
        <Text
          style={[
            styles.recommendUserName,
            { marginLeft: index === 0 ? 24 : 8 },
          ]}
        >
          {item.name}
        </Text>
        <Text
          style={[
            styles.recommendUserDesc,
            { marginLeft: index === 0 ? 24 : 8 },
          ]}
        >
          {item.desc}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      {/* header */}
      <Header />

      {/* recommend */}
      <View style={styles.recommendWrapper}>
        <Text style={styles.recommendTitle}>おすすめの友達</Text>
        <View style={styles.recommendUsersWrapper}>
          <FlatList
            data={recommendUsers}
            renderItem={renderRecommendUserItem}
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
  recommendWrapper: {
    // marginHorizontal: 16,
  },
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
  recommendUserItem: {
    width: 320,
    height: 400,
    marginRight: 16,
  },
  recommendUserItemImage: {
    borderRadius: 8,
  },
  recommendUserName: {
    fontFamily: 'inter_semibold',
    fontSize: 24,
    color: colors.gray800,
    maxWidth: 269,
    marginVertical: 16,
  },
  recommendUserDesc: {
    fontFamily: 'inter_semibold',
    fontSize: 16,
    color: colors.gray500,
    maxWidth: 269,
    maxHeight: 48,
    marginBottom: 16,
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
