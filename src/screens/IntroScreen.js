import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Button, Text, H2, View} from 'native-base';

export const IntroScreen = ({navigation}) => {
  function onEnter() {
    navigation.navigate('Home');
  }

  return (
    <Container style={styles.container}>
      <View>
        <H2 style={styles.title}>REACT NATIVE CHALLENGE</H2>
        <Text style={styles.name}>Félix Andersson</Text>
      </View>
      <View>
        <Button style={styles.button} dark onPress={onEnter}>
          <Text>Enter</Text>
        </Button>
        <Text>20/9/2020</Text>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontWeight: 'bold',
    marginTop: 50,
  },
  name: {
    textAlign: 'center',
  },
  button: {
    marginBottom: 30,
  },
  date: {
    textAlign: 'center',
    marginTop: 10,
  },
});
