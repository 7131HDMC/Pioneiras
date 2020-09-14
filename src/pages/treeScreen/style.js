import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  // eslint-disable-next-line react-native/no-unused-styles
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    flex: 5,
  },
});

export const TREE_IMG = require('~/assets/LOGO.jpg');

export const MAX_HEIGHT = 500;
export const MAX_WIDTH = 365;
export const MAPPING = [
  {
    id: '0',
    name: 'root',
    shape: 'rectangle',
    width: 365,
    height: 200,
    x1: 0,
    y1: 341,
  },
  {
    id: '1',
    name: 'body',
    shape: 'rectangle',
    width: 365,
    height: 60,
    x1: 0,
    y1: 280,
  },
  {
    id: '2',
    name: 'crown',
    shape: 'rectangle',
    width: 365,
    height: 279,
    x1: 0,
    y1: 0,
  },
];
