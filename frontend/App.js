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
import ProductScreenComponent from '../frontend/components/ProductScreenComponent';
import ProductScreen from './screens/ProductScreen';

const App = () => {
  return (
    <View>
      <ProductScreen />
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
