import React from 'react';
import { observer, inject } from 'mobx-react/native';
import PropTypes from 'prop-types';
import { Text, View, TextInput, Button, ToastAndroid } from 'react-native';
import styles from './style';

@inject('user')
@observer
export default class Login extends React.Component {
  nameChangeHandler = (value) => {
    const { user } = this.props;
    user.setUsername(value);
  };
  passwordChangeHandler = (value) => {
    const { user } = this.props;
    user.setPassWord(value);
  };
  authorized = () => {
    const { user } = this.props;
    const authorized = user.isAutorised();
    if (authorized) {
      ToastAndroid.show('Login Successfully !', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('Sorry !', ToastAndroid.SHORT);
    }
  };

  render() {
    const { user } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.loginText}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            LOGIN
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <View>
            <Text>UserName</Text>
            <TextInput
              onChangeText={this.nameChangeHandler}
              style={styles.textInput}
              underlineColorAndroid="transparent"
              clearButtonMode="never"
              value={user.username}
            />
          </View>
          <View>
            <Text>Password</Text>
            <TextInput
              onChangeText={this.passwordChangeHandler}
              style={styles.textInput}
              underlineColorAndroid="transparent"
              secureTextEntry
              value={user.passWord}
            />
            <Text style={styles.forgotPassword}>Forgot Password ?</Text>
          </View>
        </View>

        <View style={styles.thirdBox}>
          <Button title="Login" onPress={this.authorized} />
        </View>
        <Text>{user.username}</Text>
      </View>
    );
  }
}

Login.propTypes = {
  user: PropTypes.any, // eslint-disable-line react/forbid-prop-types
};
