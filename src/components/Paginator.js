import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {View, Text, Icon} from 'native-base';

const PaginatorButton = ({
  children,
  disabled = false,
  active = false,
  onPress = () => {},
  underlayColor = '#4781b3',
}) => (
  <View>
    <TouchableOpacity
      disabled={disabled || active}
      onPress={() => onPress()}
      underlayColor={underlayColor}
      style={
        active || disabled
          ? [styles.button, styles.activeButton]
          : styles.button
      }>
      {children}
    </TouchableOpacity>
  </View>
);

export const Paginator = ({
  pages,
  active,
  maxButtons = 7,
  onPageChange = () => {},
}) => {
  const genButtons = () => {
    let start = active;
    let end = active;

    function moveLeft() {
      if (start > 1) {
        start--;
      } else {
        moveRight();
      }
    }

    function moveRight() {
      if (end < pages) {
        end++;
      } else {
        moveLeft();
      }
    }

    for (let i = 0; i < maxButtons - 1; i++) {
      if (pages < maxButtons) {
        start = 1;
        end = pages;
        break;
      }

      if (i % 2) {
        moveLeft();
      } else {
        moveRight();
      }
    }

    const pagesArray = [];
    for (let i = start; i <= end; i++) {
      pagesArray.push(i);
    }

    if (start > 1) {
      pagesArray.shift();
      pagesArray.unshift(1, 0);
    }

    if (end < pages) {
      pagesArray.pop();
      pagesArray.push(0, pages);
    }

    return pagesArray.map((page, idx) => {
      if (!page) {
        return (
          <View key={idx}>
            <Icon type="MaterialIcons" name="more-horiz" style={styles.dots} />
          </View>
        );
      } else {
        return (
          <PaginatorButton
            key={idx}
            active={active === page}
            onPress={() => onPageChange(page)}>
            <Text style={styles.buttonText}>{page}</Text>
          </PaginatorButton>
        );
      }
    });
  };

  // const prevPageDisabled = active === 1;
  // const nextPageDisabled = active === pages;

  // const prevPage = () => {
  //   onPageChange(active - 1);
  // };

  // const nextPage = () => {
  //   onPageChange(active + 1);
  // };

  return (
    <View style={styles.container}>
      {/* <PaginatorButton disabled={prevPageDisabled} onPress={prevPage}>
        <Icon type="MaterialIcons" name="chevron-left" style={styles.icon} />
      </PaginatorButton> */}
      {genButtons()}
      {/* <PaginatorButton disabled={nextPageDisabled} onPress={nextPage}>
        <Icon type="MaterialIcons" name="chevron-right" style={styles.icon} />
      </PaginatorButton> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#62b1f6',
    borderRadius: 2,
    marginHorizontal: 2,
  },
  activeButton: {
    backgroundColor: '#a6d1f6',
  },
  icon: {
    color: 'white',
    paddingVertical: 3,
    paddingHorizontal: 4,
  },
  buttonText: {
    color: 'white',
    paddingVertical: 7,
    paddingHorizontal: 14,
  },
  dots: {
    flex: 1,
    textAlignVertical: 'center',
    color: '#4a9ebc',
    fontSize: 20,
  },
});
