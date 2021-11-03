import React, { useState } from 'react';
import { Keyboard, Pressable } from 'react-native';
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

const SignUpStepTwo = () => {
  // eslint-disable-next-line no-unused-vars
  const [_, setWasActivated] = useState(false);

  const theme = useTheme();

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
                // onChangeText={setPassword}
                // value={password}
                secureTextEntry
                isPassword
                setWasActivated={setWasActivated}
              />
              <Input
                iconName="lock"
                placeholder="Repeat password"
                keyboardType="default"
                // onChangeText={setPassword}
                // value={password}
                secureTextEntry
                isPassword
                setWasActivated={setWasActivated}
              />
            </InputSection>

            <Button color={theme.colors.correct} title="Sign up" />
          </Form>
        </Main>
      </Container>
    </Pressable>
  );
};

export default SignUpStepTwo;
