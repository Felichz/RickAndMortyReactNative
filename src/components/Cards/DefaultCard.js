import React from 'react';

import {View, StyleSheet} from 'react-native';

export const DefaultCard = ({children}) => (
  <View style={styles.card}>{children}</View>
);

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    borderRadius: 3,
    overflow: 'hidden',
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
