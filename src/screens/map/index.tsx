import {Text} from '@rneui/base';
import React, {FC} from 'react';
import {SafeAreaView, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const MapScreen: FC<{}> = () => {
  return <SafeAreaView style={tw`bg-white h-full`}>
    <View style={tw`p-5`}>
      <Text>Map Screen</Text>
    </View>
  </SafeAreaView>;
};


export default MapScreen;
