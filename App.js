
import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import Route from './routes/Route';
import firebase from '@react-native-firebase/app';
import FirebaseConfig from './FirebaseConfig';

firebase.initializeApp(FirebaseConfig);

const App = () => {
  return (
    <Route/>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
