import { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions,
  Animated,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import axios from 'axios';

import Header from '../components/Header';
// import recommendUsers from '../assets/data/recommendUsers';
import colors from '../constants/colors';
import { RootTabScreenProps } from '../types';

const DeviceWidth = Dimensions.get('window').width;
const cardWidth = DeviceWidth * 0.820512820512821;

export default function SearchScreen({
  navigation,
}: RootTabScreenProps<'SearchStack'>) {
  const [recommendUsers, setRecommendUsers] = useState([]);
  useEffect(() => {
    const fetchRecommendUser = async () => {
      const response = await axios.get(
        'http://localhost:8000/api/users/recommend/all',
      );
      console.log(response.data);
      setRecommendUsers(response.data);
    };
    fetchRecommendUser();
  }, []);

  // console.log(recommendUsers);

  const scrollX = useRef(new Animated.Value(0)).current;
  const renderRecommendUserItem = ({ item, index }: any) => {
    const inputRange = [
      (index - 1) * cardWidth,
      index * cardWidth,
      (index + 1) * cardWidth,
    ];
    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0.9, 1, 0.9],
    });

    return (
      <Animated.View style={{ transform: [{ scale }] }}>
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
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      {/* header */}
      <Header />

      {/* recommend */}
      <View>
        <Text style={styles.recommendTitle}>おすすめの友達</Text>
        <View style={styles.recommendUsersWrapper}>
          <Animated.FlatList
            onScroll={Animated.event(
              [
                {
                  nativeEvent: { contentOffset: { x: scrollX } },
                },
              ],
              { useNativeDriver: true },
            )}
            data={recommendUsers}
            renderItem={renderRecommendUserItem}
            keyExtractor={(item: any) => item._id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            // snapToInterval={cardWidth}
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
    width: DeviceWidth,
    height: 520,
    marginTop: 24,
  },
  recommendUserItem: {
    width: cardWidth,
    height: 400,
    marginRight: 8,
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
