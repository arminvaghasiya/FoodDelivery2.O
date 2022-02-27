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
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <View>
      <HomeScreen />
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
