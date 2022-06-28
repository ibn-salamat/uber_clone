import {AppRegistry} from 'react-native';
import App from './src/App';

const appInfo = {
  name: 'uber_clone',
  displayName: 'uber_clone',
};

AppRegistry.registerComponent(appInfo.name, () => App);
