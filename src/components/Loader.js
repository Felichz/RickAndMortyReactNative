import React from 'react';
import {ActivityIndicator} from 'react-native';

export const Loader = (props) => (
  <ActivityIndicator size="large" color="black" {...props} />
);
