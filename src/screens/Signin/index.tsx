import React, { useState } from 'react';
import {
  KeyboardAvoidingView, StatusBar, Pressable, Keyboard, Alert, Platform,
} from 'react-native';
import { useTheme } from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { MaterialIcons } from '@expo/vector-icons';

import * as Yup from 'yup';

import { Button } from '../../components/Button';
import Input from '../../components/Input';

import {
  Container,
  Header,
  CancelSignInButton,
  Title,
  Subtitle,
  InputSection,
  ForgotPassword,
  ForgotPasswordText,
  Footer,
} from './styles';

const schema = Yup.object().shape({
  password: Yup.string().required('Password is required'),
  email: Yup.string().required('Email is required').email('Invalid email'),
});

export const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginIn, setIsLoginIn] = useState<boolean>(false);

  const theme = useTheme();

  const iconColor = theme.colors.text;

  const handleSignIn = async () => {
    try {
      await schema.validate({ email, password });

      // log user in
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert(error.message);
      } else {
        Alert.alert('Something went wrong.', 'Try again later');
      }
    }
  };

  const handleCancelSignIn = () => {
    Keyboard.dismiss();
    setEmail('');
    setPassword('');
    setIsLoginIn(false);
  };

  return (
    <>
      { isLoginIn && (
      <CancelSignInButton onPress={handleCancelSignIn}>
        <MaterialIcons
          name="chevron-left"
          size={24}
          color={iconColor}
        />
      </CancelSignInButton>
      ) }
      <KeyboardAvoidingView behavior="position" enabled={Platform.OS === 'ios'}>
        <Pressable onPress={Keyboard.dismiss}>
          <Container>
            <StatusBar
              barStyle="dark-content"
              translucent
              backgroundColor="transparent"
            />

            {/* { isLoginIn && (
            <CancelSignInButton onPress={handleCancelSignIn}>
              <MaterialIcons
                name="chevron-left"
                size={24}
                color={iconColor}
              />
            </CancelSignInButton>
          ) } */}

            <Header>
              { !isLoginIn && (
              <>
                <Title>
                  Almost
                  {'\n'}
                  there.
                </Title>
              </>
              )}
              <Subtitle>
                Log in to start having
                {'\n'}
                an amazing experience.
              </Subtitle>
            </Header>

            <InputSection isLoginIn={isLoginIn}>
              <Input iconName="mail" placeholder="Email" keyboardType="email-address" onChangeText={setEmail} value={email} setIsLoginIn={setIsLoginIn} />

              <Input
                iconName="lock"
                placeholder="Password"
                keyboardType="default"
                onChangeText={setPassword}
                value={password}
                secureTextEntry
                isPassword
                setIsLoginIn={setIsLoginIn}
              />
              { isLoginIn && (
              <ForgotPassword onPress={() => {}}>
                <ForgotPasswordText>
                  Forgot my password
                </ForgotPasswordText>
              </ForgotPassword>
              )}
            </InputSection>

            <Footer>
              <Button title="Login" onPress={handleSignIn} disabled={!(email !== '' && password !== '')} isLoading={false} />

              { !isLoginIn && (
              <Button
                title="Create an account"
                onPress={() => {}}
                isLoading={false}
                color={theme.colors.background_two}
                isLightBackground
              />
              )}
            </Footer>
          </Container>
        </Pressable>
      </KeyboardAvoidingView>
    </>
  );
};
