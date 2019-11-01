import React, { Component } from 'react';
import { Image } from 'react-native';
import {
  Container,
  Content,
  Text,
  Button,
  Footer,
  FooterTab
} from 'native-base';

export default class Sidebar extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Image
            source={require('../../assets/main.jpg')}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </Content>
        <Footer>
          <FooterTab>
            <Button>
              <Text>Sign Up</Text>
            </Button>
            <Button>
              <Text>Login</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
