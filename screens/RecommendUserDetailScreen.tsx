import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import { RootTabScreenProps } from '../types';

export default function RecommendUserDetailScreen({
  navigation,
  route,
}: RootTabScreenProps<'SearchStack'>) {
  const { profilePicture, name, desc } = route.params;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={profilePicture}
        style={styles.recommendUserItem}
        imageStyle={styles.recommendUserItemImage}
      />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  recommendUserItem: {
    width: 320,
    height: 400,
  },
  recommendUserItemImage: {
    borderRadius: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
