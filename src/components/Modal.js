import React from 'react';

import {
  Modal as ReactModal,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import {Button, View, Text, H1, List, ListItem} from 'native-base';

export const Modal = ({
  imgUri,
  title,
  properties,
  related,
  showModal,
  onCloseRequest,
}) => (
  <ReactModal animationType="fade" transparent={true} visible={showModal}>
    <TouchableWithoutFeedback onPress={onCloseRequest}>
      <View style={[styles.centeredView, styles.overlay]}>
        <TouchableWithoutFeedback>
          <View style={styles.modalBox}>
            <ScrollView style={styles.modalScroll}>
              <View style={styles.modalContent}>
                {imgUri && (
                  <Image style={styles.image} source={{uri: imgUri}} />
                )}
                <H1 style={styles.title}>{title}</H1>

                <List style={styles.dataList}>
                  <ListItem itemDivider>
                    <Text>Properties</Text>
                  </ListItem>
                  {Object.entries(properties).map(([key, value]) => (
                    <ListItem key={key}>
                      <Text>
                        {UppercaseFirst(key)}: {value}
                      </Text>
                    </ListItem>
                  ))}
                </List>

                {related && related.map((item) => <Text>{item.name}</Text>)}

                <View style={styles.closeButton}>
                  <Button info onPress={onCloseRequest}>
                    <Text>Close</Text>
                  </Button>
                </View>
              </View>
            </ScrollView>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  </ReactModal>
);

function UppercaseFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, .5)',
  },
  modalBox: {
    borderRadius: 5,
    overflow: 'hidden',
    height: '80%',
    width: '80%',
    justifyContent: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalScroll: {
    margin: 10,
  },
  modalContent: {
    alignItems: 'center',
  },
  image: {
    width: '65%',
    aspectRatio: 1,
    resizeMode: 'contain',
    margin: 10,
    borderRadius: 1,
  },
  title: {
    textAlign: 'center',
  },
  dataList: {
    marginVertical: 15,
    minWidth: 250,
  },
});
