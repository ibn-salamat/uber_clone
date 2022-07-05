import React, {FC, useState} from 'react';
import {Modal, SafeAreaView, TouchableOpacity, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {Icon, Text} from '@rneui/base';

import {GOOGLE_MAPS_API_KEY} from '@env';
import {setDestination, setOrigin} from '../../store/slices/nav';
import {ModalPlaceAutoComplete} from '../../components';

const HomeScreen: FC<{}> = () => {
  const [isMapModalVisisble, setIsMapModalVisisble] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <GooglePlacesAutocomplete
          nearbyPlacesAPI="GooglePlacesSearch"
          placeholder="Where from?"
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

            dispatch(
                setOrigin({
                  location: details?.geometry.location,
                  description: data.description,
                }),
            );

            dispatch(setDestination(null));
            // @ts-ignore
            navigation.navigate('MapScreen');
          }}
          fetchDetails
          listEmptyComponent={() => <Text>NotFound</Text>}
          minLength={2}
          enablePoweredByContainer={false}
        />

        <TouchableOpacity
          style={tw`
        flex-row
        mt-3 
        p-5 
        bg-gray-300 
        rounded-lg 
        shadow-md`}
          onPress={() => {
            setIsMapModalVisisble(true);
          }}
        >
          <Icon name="home" size={36} />
          <View>
            <Text style={tw`font-semibold`}>Home</Text>
            <Text style={tw`text-gray-500`}>Click to set</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={tw`
        flex-row
        mt-3 
        p-5 
        bg-gray-300 
        rounded-lg 
        shadow-md`}
          onPress={() => {
            setIsMapModalVisisble(true);
          }}
        >
          <Icon name="stop" size={36} />
          <View>
            <Text style={tw`font-semibold`}>Work</Text>
            <Text style={tw`text-gray-500`}>Click to set</Text>
          </View>
        </TouchableOpacity>

        <Modal visible={isMapModalVisisble}>
          <ModalPlaceAutoComplete />
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
