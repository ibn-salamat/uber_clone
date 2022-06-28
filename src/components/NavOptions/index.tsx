import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const data = [
  {
    id: '1',
    title: 'MapScreen',
    screen: 'MapScreen',
    image: 'https://cdn-icons.flaticon.com/png/512/1078/premium/1078454.png?token=exp=1656458293~hmac=fdbb0692c54e4ebc2cd7d15cf9a0db8c',
  },
  {
    id: '2',
    title: 'Order Food',
    screen: 'EatScreen',
    image: 'https://cdn-icons-png.flaticon.com/512/1078/1078427.png',
  },
];

const NavOptions: FC<{}> = () => {
  const navigation = useNavigation();

  return <View>
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({item}) => {
        return <TouchableOpacity
          style={tw`p-2 bg-gray-200 m-2 w-40`}
          onPress={() => {
            // @ts-ignore
            navigation.navigate(item.screen);
          }}
        >
          <View>
            <Image
              style={{
                width: 120,
                height: 120,
                resizeMode: 'contain',
              }}
              source={{
                uri: item.image,
              }}
            />
            <Text
              style={tw`text-lg font-semibold mt-2`}
            >{item.title}</Text>
            {/*  */}
          </View>
        </TouchableOpacity>;
      }}
    />
  </View>;
};


export default NavOptions;
