import React, {FC, useEffect, useState} from 'react';
import {View} from 'react-native';
import MapView, {Marker, Region} from 'react-native-maps';

import {useAppSelector} from '../../tools/hooks';
// import tw from 'tailwind-react-native-classnames';

const Map: FC<{}> = () => {
  const navState = useAppSelector((state) => state.nav);
  const [region, setRegion] = useState<Region>();

  useEffect(() => {
    if (navState.origin) {
      setRegion({
        latitude: navState.origin.location.lat,
        longitude: navState.origin.location.lng,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      });
    }
  }, [navState.origin]);

  return <View>
    <MapView
      style={{
        height: '100%',
      }}
      mapType="mutedStandard"
      initialRegion={region}
    >
      {region &&
      <Marker
        coordinate={{
          latitude: region.latitude,
          longitude: region.longitude,
        }}
        identifier="origin"
        title='Origin'
        description={navState.origin?.description}
      />}
    </MapView>
  </View>;
};

export default Map;
