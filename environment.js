import DeviceInfo from 'react-native-device-info';

const BundleId = DeviceInfo.getBundleId();

let env;

if (__DEV__) {
  env = require('./env.development.json');
} else if (/\.stage$/.test(BundleId)) {
  env = require('./env.stage.json');
} else {
  env = require('./env.production.json');
}

Object.assign(global, env);
