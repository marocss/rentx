import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Keyboard, Pressable } from 'react-native';
import { useTheme } from 'styled-components';
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
  name: string;
  email: string;
  driversLicense: string;
}

const SignUpStepTwo = () => {
  // eslint-disable-next-line no-unused-vars
  const [_, setWasActivated] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const route = useRoute();
  const { user } = route.params as SignUpStepTwoRouteParams;
  console.log(user);

  const theme = useTheme();

  const handleSignUp = () => {
    if (!password || !passwordConfirmation) {
      return Alert.alert('Password is required');
    }
    if (password !== passwordConfirmation) {
      return Alert.alert('Passwords do not match');
    }

    // sign up the user
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
