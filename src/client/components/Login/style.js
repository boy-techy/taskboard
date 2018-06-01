import { StyleSheet } from 'react-native';

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
    justifyContent: 'space-between',
  },
  textInput: {
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    color: '#b07844',
    fontSize: 16,
    fontWeight: 'bold',
  },
  thirdBox: {
    width: 'auto',
    backgroundColor: 'green',
  },
});

export default styles;
