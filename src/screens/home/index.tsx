import React, {FC} from 'react';
import {Image, SafeAreaView, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {
  GooglePlacesAutocomplete,
} from 'react-native-google-places-autocomplete';

import {GOOGLE_MAPS_API_KEY} from '@env';
import {NavOptions} from '../../components';
import {useRef} from 'react';
import {Text} from '@rneui/base';

const HomeScreen: FC<{}> = () => {
  const ref = useRef();
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

      <GooglePlacesAutocomplete
        nearbyPlacesAPI='GooglePlacesSearch'
        placeholder='Where from?'
        query={{
          key: GOOGLE_MAPS_API_KEY,
          language: 'en',
        }}
        styles={{
          container: {
            flex: 0,
          },
          textInput: {
            fontSize: 18,
          },
        }}
        enablePoweredByContainer
        onPress={(data, details) => {

        }}
        listEmptyComponent={<Text>NotFound</Text>}
        renderRow={(data) => {
          return <Text>{data.description}</Text>;
        }}
      />

      <NavOptions />
    </View>
  </SafeAreaView>;
};


export default HomeScreen;
