import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

import DeviceInfo from 'react-native-device-info';

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 18,
    paddingVertical: 16,
  },
});

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Text style={styles.text}>Olá Smarppy!</Text>
          <Text style={styles.text}>
            Environment: {'\n'}
            {DeviceInfo.getBundleId()}
          </Text>
          <Text style={styles.text}>{URL_API}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
