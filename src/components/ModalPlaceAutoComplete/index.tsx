import React, {FC} from 'react';
import {View} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {Text} from '@rneui/base';

import {GOOGLE_MAPS_API_KEY} from '@env';

const ModalPlaceAutoComplete: FC<{}> = () => {
  return (
    <View style={tw`p-5`}>
      <GooglePlacesAutocomplete
        nearbyPlacesAPI="GooglePlacesSearch"
        placeholder="Choose adress"
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
        // onPress={(data, details) => {
        //   if (!details) return;

        //   dispatch(setOrigin({
        //     location: details?.geometry.location,
        //     description: data.description,
        //   }));

        //   dispatch(setDestination(null));
        //   // @ts-ignore
        //   navigation.navigate('MapScreen');
        // }}
        listEmptyComponent={() => <Text>NotFound</Text>}
        minLength={2}
        enablePoweredByContainer={false}
      />
    </View>
  );
};

export default ModalPlaceAutoComplete;
