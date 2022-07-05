import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';

import {HomeScreen, MapScreen} from './screens';
import {store} from './store';

// AIzaSyDfMcOTjmBjTYw5BOq8p9yMLFI6kLN7m8s google map key

const App = () => {
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    Icon.loadFont();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="HomeScreen"
              navigationKey="HomeScreen"
              key="HomeScreen"
              component={HomeScreen}
            />

            <Stack.Screen
              name="MapScreen"
              navigationKey="MapScreen"
              key="MapScreen"
              component={MapScreen}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
