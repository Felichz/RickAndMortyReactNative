import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {View, Button, Icon} from 'native-base';

import {SearchField} from '../components/SearchField';

const initialValues = {
  name: '',
  type: '',
};

export const SearchFields = ({entity, onSearch}) => {
  const [values, setValues] = useState(initialValues);

  function handleClear() {
    setValues(initialValues);
    onSearch(initialValues);
  }

  return (
    <>
      <View style={styles.searchFields}>
        <SearchField
          placeholder="Search by name"
          onChangeText={(text) => setValues({...values, name: text})}
          value={values.name}
          onSubmit={() => onSearch(values)}
        />
        {entity !== 'EPISODES' && (
          <SearchField
            placeholder="Search by type"
            onChangeText={(text) => setValues({...values, type: text})}
            value={values.type}
            onSubmit={() => onSearch(values)}
          />
        )}
      </View>
      <View>
        <Button
          info
          small
          style={styles.clearButton}
          onPress={() => handleClear()}>
          <Icon type="MaterialIcons" name="clear" style={styles.closeIcon} />
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  searchFields: {
    marginRight: 10,
  },
  clearButton: {
    height: 35,
    top: 6,
    marginBottom: 12.5,
  },
  closeIcon: {
    fontSize: 20,
  },
});
