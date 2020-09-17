import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {IntroScreen} from './src/screens/IntroScreen';
import {MainScreen} from './src/screens/MainScreen';

const {Navigator, Screen} = createStackNavigator();

const App = () => (
  <NavigationContainer>
    {/* headerMode="none" */}
    <Navigator initialRouteName="Intro"  headerMode="none">
      <Screen
        name="Intro"
        component={IntroScreen}
        options={{title: 'Introduction'}}
      />
      <Screen name="Main" component={MainScreen} />
    </Navigator>
  </NavigationContainer>
);

export default App;
