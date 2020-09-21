import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {EntityScreen} from './EntityScreen';

const {Navigator, Screen} = createBottomTabNavigator();

export const HomeScreen = ({navigation}) => {
  return (
    <Navigator
      tabBarOptions={{
        labelStyle: {
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          textAlignVertical: 'center',
          fontSize: 13,
        },
      }}>
      <Screen name="Characters">
        {(props) => <EntityScreen {...props} entity="CHARACTERS" />}
      </Screen>
      <Screen name="Locations">
        {(props) => <EntityScreen {...props} entity="LOCATIONS" />}
      </Screen>
      <Screen name="Episodes">
        {(props) => <EntityScreen {...props} entity="EPISODES" />}
      </Screen>
    </Navigator>
  );
};
