import React, {FC} from 'react';
import {Text, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const NavOptions: FC<{}> = () => {
  return <View style={tw`p-5`}>
    <Text>Nav</Text>
  </View>;
};


export default NavOptions;
