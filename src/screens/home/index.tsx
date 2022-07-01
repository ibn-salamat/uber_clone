import React, {FC} from 'react';
import {Image, SafeAreaView, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {
  GooglePlacesAutocomplete,
} from 'react-native-google-places-autocomplete';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {GOOGLE_MAPS_API_KEY} from '@env';
import {NavOptions} from '../../components';
import {Text} from '@rneui/base';
import {setDestination, setOrigin} from '../../store/slices/nav';

const HomeScreen: FC<{}> = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

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
        }}
        styles={{
          container: {
            flex: 0,
          },
          textInput: {
            fontSize: 18,
          },
        }}
        onPress={(data, details) => {
          if (!details) return;

          dispatch(setOrigin({
            location: details?.geometry.location,
            description: data.description,
          }));

          dispatch(setDestination(null));
          // @ts-ignore
          navigation.navigate('MapScreen');
        }}
        fetchDetails
        listEmptyComponent={() => <Text>NotFound</Text>}
        minLength={2}
        enablePoweredByContainer={false}
      />

      <NavOptions />
    </View>
  </SafeAreaView>;
};


export default HomeScreen;
