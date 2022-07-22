import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from 'react-native';
import Header from '../components/Header';

import recommendUsers from '../assets/data/recommendUsers';
import colors from '../constants/colors';

import { RootTabScreenProps } from '../types';
import { Entypo } from '@expo/vector-icons';

export default function SearchScreen({
  navigation,
}: RootTabScreenProps<'Search'>) {
  const renderRecommendUserItem = ({ item }: any) => {
    return (
      <TouchableOpacity>
        <ImageBackground
          source={item.profilePicture}
          style={styles.recommendUserItem}
          imageStyle={styles.recommendUserItemImage}
        />
        <Text style={styles.recommendUserName}>{item.name}</Text>
        <Text style={styles.recommendUserDesc}>{item.desc}</Text>
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
        <Entypo name="magnifying-glass" size={28} color={colors.black} />
        <TextInput />
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
  recommendWrapper: {},
  recommendTitle: {
    fontFamily: 'inter_bold',
  },
  recommendUsersWrapper: {},
  recommendUserItem: {
    width: 300,
    height: 400,
  },
  recommendUserItemImage: {
    borderRadius: 8,
  },
  recommendUserName: {},
  recommendUserDesc: {},
  // search
  searchWrapper: {},
});
