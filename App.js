import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import Login from "./src/client/components/Login";
import SimpleDesign from './src/client/components/SampleDesign';

export default class App extends React.Component {

  render() {
    return (
      <ScrollView style={styles.container}>
          <Login />
          <SimpleDesign />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
