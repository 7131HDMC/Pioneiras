import Reactotron from 'reactotron-react-native';

if (__DIR__) {
  const tron = Reactotron.configure().useReactNative().connect();

  tron.clear();

  console.tron = tron;
}
