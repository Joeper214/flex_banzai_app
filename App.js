import React from 'react';
import { 
  Container, 
  Header, 
  Content, 
  Form, 
  Item, 
  Input,
  Left, 
  Body, 
  Right,
  Title, 
  Label, 
  Spinner, 
  Button,
  Text, 
  Grid,
  Col
} from 'native-base';

export default class App extends React.Component {
  state = {
    email: '',
    password: '',
    authenticating: false,
  }

  styles = {
    login_container: {
      padding: 10
    },
  }

  onPressSignIn () {
    this.setState({
      authenticating: true,
    })
  }

  renderCurrentState() {
    if(this.state.authenticating) {
      return (
        <Content>
          <Spinner />
        </Content>
      )
    }

    return (
      <Content contentContainerStyle={ this.styles.login_container }>
        <Grid style={{alignItems: 'center', justifyContent: 'center'}}>
          <Col>
            <Form contentContainerStyle={ this.styles.form_style }>
              <Item fixedLabel>
                <Label>Email</Label>
                <Input
                  placeholder='Enter your email'
                  label='Email'
                  onChangeText={email => this.setState({ email })}
                  value={this.state.email}
                />
              </Item>
              <Item fixedLabel last>
                <Label>Password</Label>
                <Input
                  placeholder='Enter your password ...'
                  label='Password'
                  secureTextEntry
                  onChangeText={password => this.setState({ password })}
                  value={this.state.password} 
                />
              </Item>
              <Button
                full
                onPress={() => this.onPressSignIn()} 
              > 
                <Text> Log In </Text>
              </Button>
            </Form>
          </Col>
        </Grid>
      </Content>
    )
  }

  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Flex BanZai!</Title>
          </Body>
          <Right /> 
        </Header>
        {this.renderCurrentState()}
      </Container>
    );
  }
}

