import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";
import Login from "./src/client/components/Login";
import SimpleDesign from "./src/client/components/SampleDesign";

export default class App extends React.Component {
  render() {
    return (
      <StatusBar backgroundColor="blue" barStyle="light-content">
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <View style={styles.container}>
            <Login />
          </View>
        </KeyboardAvoidingView>
      </StatusBar>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
