import React from 'react';
import { Image, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { Asset } from 'expo-asset';

export default function Loading() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={require('./assets/images/again.gif')}
        onLoad={this._cacheResourcesAsync}
      />
    </View>
  );
}
