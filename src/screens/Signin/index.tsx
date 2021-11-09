import React, { useState } from 'react';
import {
  KeyboardAvoidingView, StatusBar, Pressable, Keyboard, Alert, Platform,
} from 'react-native';
import { useTheme } from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { MaterialIcons } from '@expo/vector-icons';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth';
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

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [wasActivated, setWasActivated] = useState(false);

  const theme = useTheme();
  const iconColor = theme.colors.text;

  const { navigate } = useNavigation();

  const { signIn } = useAuth();

  const handleSignIn = async () => {
    try {
      await schema.validate({ email, password });

      signIn({ email, password });
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
    setWasActivated(false);
  };

  const handleSignUp = () => {
    navigate('SignUpStepOne');
  };

  return (
    <>
      { wasActivated && (
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

            <Header>
              { !wasActivated && (
                <Title>{'Almost\nthere.'}</Title>
              )}
              <Subtitle>{'Log in to start having\nan amazing experience.'}</Subtitle>
            </Header>

            <InputSection isLoginIn={wasActivated}>
              <Input
                iconName="mail"
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={setEmail}
                value={email}
                setWasActivated={setWasActivated}
              />

              <Input
                iconName="lock"
                placeholder="Password"
                autoCapitalize="none"
                keyboardType="default"
                onChangeText={setPassword}
                value={password}
                secureTextEntry
                isPassword
                setWasActivated={setWasActivated}
              />
              { wasActivated && (
                <ForgotPassword onPress={() => {}}>
                  <ForgotPasswordText>
                    Forgot my password
                  </ForgotPasswordText>
                </ForgotPassword>
              )}
            </InputSection>

            <Footer>
              <Button title="Login" onPress={handleSignIn} disabled={!(email !== '' && password !== '')} isLoading={false} />

              { !wasActivated && (
                <Button
                  title="Create an account"
                  onPress={handleSignUp}
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
