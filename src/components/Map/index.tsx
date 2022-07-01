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
        latitude: navState.origin.lat,
        longitude: navState.origin.lng,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      });
    }
  }, [navState.origin]);

  console.log(navState.origin);

  return <View>
    <MapView
      style={{
        height: '100%',
      }}
      mapType="mutedStandard"
      region={region}
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
