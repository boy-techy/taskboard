import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class Login extends React.Component {

    state = {
        name: '',
        password: ''
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.loginText}>
                    <Text style={{alignSelf: 'center',
                        fontSize: 20,
                        fontWeight: 'bold',}}>LOGIN</Text>
                </View>

                <View style={styles.inputContainer}>
                    <View>
                        <Text>UserName</Text>
                        <TextInput onChange={(value)=> this.setState({name: value})}
                                   style={styles.textInput}
                                   underlineColorAndroid={'transparent'}
                                   clearButtonMode={'never'}
                                   value={this.state.name}/>
                    </View>
                    <View>
                        <Text>Password</Text>
                        <TextInput onChange={(value)=> this.setState({password: value})}
                                   style={styles.textInput}
                                   underlineColorAndroid={'transparent'}
                                   secureTextEntry={true}
                                   keyboardType={'visible-password'}
                                   value={this.state.password}/>
                        <Text style={styles.forgotPassword}>Forgot Password ?</Text>
                    </View>
                </View>

                <View style={styles.thirdBox}>
                    <Button title={'Login'} onPress={()=> console.log("Clicked")} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#79cdd4',
        alignItems: 'center',
        padding: 30,
        justifyContent: 'space-around',
    },
    loginText: {
        alignSelf: 'stretch',
        padding: 20,
        margin: 10,
    },
    inputContainer: {
        alignSelf: 'stretch',
        padding: 10,
        justifyContent: 'space-between'
    },
    textInput: {
        borderWidth: 1,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginBottom: 10
    },
    forgotPassword: {
        alignSelf: 'flex-end',
        color: '#b07844',
        fontSize: 16,
        fontWeight: 'bold'
    },
    thirdBox: {
        width: 'auto',
        backgroundColor: 'green',
    }
});
