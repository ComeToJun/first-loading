import React from 'react';
import { Image, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { Asset } from 'expo-asset';
import Loading from './Loading';
import { NavigationContainer } from '@react-navigation/native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: true,
    };
  }
  componentDidMount = async () => {
    setTimeout(
      () =>
        this.setState({
          isReady: false,
        }),
      1600
    );
  };

  render() {
    const { isReady } = this.state;

    return isReady ? (
      <Loading />
    ) : (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('./assets/images/3.png')} />
      </View>
    );
  }
}
