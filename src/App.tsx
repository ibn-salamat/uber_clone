import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import HomeScreen from './screens/home';
import {store} from './store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
