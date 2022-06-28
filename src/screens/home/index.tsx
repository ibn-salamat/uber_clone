import React, {FC} from 'react';
import {Image, SafeAreaView, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';

import {NavOptions} from '../../components';

const HomeScreen: FC<{}> = () => {
  return <SafeAreaView style={tw`bg-white h-full`}>
    <View style={tw`p-5`}>
      <Image
        style={{
          width: 100,
          height: 100,
          resizeMode: 'contain',
        }}
        source={
          {
            uri: 'https://toppng.com/uploads/preview/uber-new-logo-2018-11550112725dlrgv5nhdy.png',
          }
        } />

      <NavOptions />
    </View>
  </SafeAreaView>;
};


export default HomeScreen;
