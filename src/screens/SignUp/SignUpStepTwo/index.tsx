import { useRoute, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Keyboard, Pressable } from 'react-native';
import { useTheme } from 'styled-components';
import { api } from '../../../services/api';
import { BackButton } from '../../../components/BackButton';
import BulletIndicator from '../../../components/BulletIndicator';
import { Button } from '../../../components/Button';
import Input from '../../../components/Input';

import {
  Container,
  Header,
  BulletIndicatorSection,
  Main,
  Form,
  FormTitle,
  InputSection,
} from './styles';

interface SignUpStepTwoRouteParams {
  user: {
    name: string;
    email: string;
    driversLicense: string;
  }
}

const SignUpStepTwo = () => {
  // eslint-disable-next-line no-unused-vars
  const [_, setWasActivated] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const { navigate } = useNavigation();
  const route = useRoute();
  const { user } = route.params as SignUpStepTwoRouteParams;
  // console.log(user);

  const theme = useTheme();

  // eslint-disable-next-line consistent-return
  const handleSignUp = async () => {
    if (!password || !passwordConfirmation) {
      return Alert.alert('Password is required');
    }
    if (password !== passwordConfirmation) {
      return Alert.alert('Passwords do not match');
    }

    await api.post('users', {
      name: user.name,
      email: user.email,
      driver_license: user.driversLicense,
      password,
    }).then(() => {
      navigate('Success', {
        title: 'Success!',
        message: 'Now you just need\nto log in',
        nextScreenRoute: 'SignIn',
      });
    }).catch(() => {
      Alert.alert('Error', 'Sign up failed. Please try again later!');
    });
  };

  return (
    <Pressable onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <BackButton />

          <BulletIndicatorSection>
            <BulletIndicator />
            <BulletIndicator active />
          </BulletIndicatorSection>
        </Header>

        <Main>
          <Form>
            <FormTitle>2. Password</FormTitle>

            <InputSection>
              <Input
                iconName="lock"
                placeholder="Password"
                keyboardType="default"
                onChangeText={setPassword}
                value={password}
                secureTextEntry
                isPassword
                setWasActivated={setWasActivated}
              />
              <Input
                iconName="lock"
                placeholder="Repeat password"
                keyboardType="default"
                onChangeText={setPasswordConfirmation}
                value={passwordConfirmation}
                secureTextEntry
                isPassword
                setWasActivated={setWasActivated}
              />
            </InputSection>

            <Button
              color={theme.colors.correct}
              title="Sign up"
              onPress={handleSignUp}
              disabled={!(password !== '' && passwordConfirmation !== '')}
            />
          </Form>
        </Main>
      </Container>
    </Pressable>
  );
};

export default SignUpStepTwo;
