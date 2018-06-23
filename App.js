import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { Input } from './components/Input'
import { Button } from './components/Button'

export default class App extends React.Component {
  state = {
    email: '',
    password: '',
    authenticating: false,
  }

  onPressSignIn () {
    this.setState({
      authenticating: true,
    })
  }

  renderCurrentState() {
    if(this.state.authenticating) {
      return (
        <View style={styles.form}>
          <ActivityIndicator size='large' />
        </View>
      )
    }

    return (
      <View style={styles.form}>
        <Text> Flex Banzai! </Text>
        <Input
          placeholder='Enter your email'
          label='Email'
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <Input
          placeholder='Enter your password ...'
          label='Password'
          secureTextEntry
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button 
          onPress={() => this.onPressSignIn()} 
        > 
          Log In 
        </Button>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderCurrentState()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  form: {
    flex: 1,
    margin: 10
  }
});
