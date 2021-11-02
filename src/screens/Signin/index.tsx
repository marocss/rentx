import React, { useState } from 'react';
import {
  KeyboardAvoidingView, StatusBar, Pressable, Keyboard,
} from 'react-native';
import { useTheme } from 'styled-components';
import { Button } from '../../components/Button';
import Input from '../../components/Input';

import {
  Container, Header, Title, Subtitle, InputSection, Footer,
} from './styles';

export const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const theme = useTheme();

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <Pressable onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar
            barStyle="dark-content"
            translucent
            backgroundColor="transparent"
          />

          <Header>
            <Title>
              Almost
              {'\n'}
              there.
            </Title>
            <Subtitle>
              Log in to start having
              {'\n'}
              an amazing experience.
            </Subtitle>
          </Header>

          <InputSection>
            <Input iconName="mail" placeholder="Email" keyboardType="email-address" onChangeText={setEmail} value={email} />

            <Input
              iconName="lock"
              placeholder="Password"
              keyboardType="default"
              onChangeText={setPassword}
              value={password}
              secureTextEntry
              isPassword
            />
          </InputSection>

          <Footer>
            <Button title="Login" onPress={() => {}} disabled isLoading={false} />
            <Button
              title="Create an account"
              onPress={() => {}}
              isLoading={false}
              color={theme.colors.background_two}
              isLightBackground
            />
          </Footer>
        </Container>
      </Pressable>

    </KeyboardAvoidingView>

  );
};
