import React, {FC} from 'react';
import {View} from 'react-native';
import MapView from 'react-native-maps';
// import {useSelector} from 'react-redux';
// import tw from 'tailwind-react-native-classnames';

const Map: FC<{}> = () => {
  return <View>
    <MapView
      style={{
        width: '100%',
        backgroundColor: 'red',
        height: '50%',
      }}
      mapType="mutedStandard"
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    />
  </View>;
};

export default Map;
