import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Item, Input, Button, Icon} from 'native-base';

export const SearchField = ({
  placeholder,
  value,
  onChangeText = () => {},
  onSubmit = () => {},
}) => {
  return (
    <View style={styles.container}>
      <Item regular style={styles.searchBox}>
        <Input
          placeholder={placeholder}
          value={value}
          style={styles.searchInput}
          onChangeText={onChangeText}
          onSubmitEditing={() => console.log('onSubmitEditing') || onSubmit()}
        />
      </Item>
      <Button info small style={styles.submitButton} onPress={onSubmit}>
        <Icon active type="MaterialIcons" name="search" />
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  searchBox: {
    width: 200,
    marginVertical: 3,
    marginRight: 10,
    borderRadius: 3,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  searchInput: {
    fontSize: 15,
    height: 40,
  },
  submitButton: {
    height: 35,
    top: 6,
  },
  searchIcon: {
    fontSize: 28,
  },
});
