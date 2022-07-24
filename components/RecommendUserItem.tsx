import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import colors from '../constants/colors';

export default function RecommendUserItem({ item, index, navigation }: any) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('RecommendUserDetial', item)}
    >
      <ImageBackground
        source={item.profilePicture}
        style={[styles.recommendUserItem, { marginLeft: index === 0 ? 16 : 0 }]}
        imageStyle={styles.recommendUserItemImage}
      />
      <Text
        style={[styles.recommendUserName, { marginLeft: index === 0 ? 24 : 8 }]}
      >
        {item.name}
      </Text>
      <Text
        style={[styles.recommendUserDesc, { marginLeft: index === 0 ? 24 : 8 }]}
      >
        {item.desc}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
});
