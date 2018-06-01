/* eslint-disable */
import React from 'react';
import { Provider } from 'mobx-react';
import { StyleSheet, View, KeyboardAvoidingView, StatusBar } from 'react-native';
import Login from './src/client/components/Login/Login';
import User from './src/client/store/user';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const App = () => (
  <Provider user={User}>
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.container}>
        <Login />
      </View>
    </KeyboardAvoidingView>
  </Provider>
);

export default App;
