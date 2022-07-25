import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';

import colors from '../assets/colors/colors';

export default function Header() {
  return (
    <SafeAreaView>
      <View style={styles.headerWrapper}>
        <Text style={styles.logotext}>Logo</Text>
        {/* <Image source={logo} style={styles.logoImage} /> */}
        <Feather name="bell" size={24} color="black" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // header
  headerWrapper: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: colors.gray300,
    borderBottomWidth: 0.4,
  },
  logotext: {
    fontFamily: 'inter_bold',
    fontSize: 18,
  },
});
