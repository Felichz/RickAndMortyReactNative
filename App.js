import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import {ApolloProvider} from '@apollo/client';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {client} from './src/Apollo/client';
import {IntroScreen} from './src/screens/IntroScreen';
import {HomeScreen} from './src/screens/HomeScreen';
import {DetailScreen} from './src/screens/DetailScreen';

const {Navigator, Screen} = createStackNavigator();

const App = () => (
  <ApolloProvider client={client}>
    <NavigationContainer>
      {/* headerMode="none" */}
      <Navigator
        initialRouteName="Intro"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#4b9ebc',
          },
          headerTintColor: 'white',
        }}>
        <Screen
          name="Intro"
          component={IntroScreen}
          options={{title: 'Introduction', headerShown: false}}
        />
        <Screen name="Home" component={HomeScreen} />
        <Screen name="Detail" component={DetailScreen} />
      </Navigator>
    </NavigationContainer>
  </ApolloProvider>
);

AppRegistry.registerComponent('MyApplication', () => App);

export default App;
