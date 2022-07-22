import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Header from '../components/Header';

import recommendUsers from '../assets/data/recommendUsers';
import colors from '../constants/colors';

import { RootTabScreenProps } from '../types';

export default function SearchScreen({
  navigation,
}: RootTabScreenProps<'Search'>) {
  // const renderRecommendUserItem = ({ item }: any) => {
  //   return (
  //     <TouchableOpacity>
  //       <ImageBackground
  //         source={item.profilePicture}
  //         style={styles.recommendUserItem}
  //         imageStyle={styles.recommendUserItemImage}
  //       ></ImageBackground>
  //     </TouchableOpacity>
  //   );
  // };
  return (
    <View style={styles.container}>
      {/* header */}
      <Header />

      {/* recommend */}
      <View style={styles.recommendWrapper}>
        <Text style={styles.recommendTitle}>おすすめの友達</Text>
        <View style={styles.recommendUsersWrapper}>
          {/* <FlatList
            data={recommendUsers}
            renderItem={renderRecommendUserItem}
            keyExtractor={(item) => item._id}
            horizontal
            showsHorizontalScrollIndicator={false}
          /> */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  recommendWrapper: {},
  recommendTitle: {
    fontFamily: 'inter_bold',
  },
  recommendUsersWrapper: {},
  recommendUserItem: {},
  recommendUserItemImage: {},
});
