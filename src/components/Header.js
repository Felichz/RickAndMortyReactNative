import React from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'native-base';

export const Header = ({children}) => (
  <View style={styles.header}>{children}</View>
);

const styles = StyleSheet.create({
  header: {
    paddingVertical: 3,
    backgroundColor: '#badaf6',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
