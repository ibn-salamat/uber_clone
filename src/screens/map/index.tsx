import React, {FC} from 'react';
import {View} from 'react-native';
import tw from 'tailwind-react-native-classnames';

import {Map} from '../../components';

const MapScreen: FC<{}> = () => {
  return <View>
    <View style={tw`h-1/2`}>
      <Map />
    </View>

    <View style={tw`h-1/2`}></View>
  </View>;
};


export default MapScreen;
