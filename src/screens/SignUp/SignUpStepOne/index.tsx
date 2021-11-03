import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Keyboard, Pressable } from 'react-native';
import { BackButton } from '../../../components/BackButton';
import BulletIndicator from '../../../components/BulletIndicator';
import { Button } from '../../../components/Button';
import Input from '../../../components/Input';

import {
  Container,
  Header,
  BulletIndicatorSection,
  Main,
  MainHeader,
  Title,
  Subtitle,
  Form,
  FormTitle,
  InputSection,
} from './styles';

const SignUpStepOne = () => {
  const [wasActivated, setWasActivated] = useState(false);

  const { navigate } = useNavigation();

  const handleNext = () => {
    navigate('SignUpStepTwo');
  };

  return (
    <Pressable onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <BackButton />

          { wasActivated && (
          <BulletIndicatorSection>
            <BulletIndicator active />
            <BulletIndicator />
          </BulletIndicatorSection>
          )}
        </Header>

        <Main>
          { !wasActivated && (
          <MainHeader>
            <Title>
              Create your
              {'\n'}
              account
            </Title>

            <Subtitle>
              Sign up in a
              {'\n'}
              fast and easy way
            </Subtitle>
          </MainHeader>
          )}

          <Form wasActivated={wasActivated}>
            <FormTitle>1. Info</FormTitle>

            <InputSection wasActivated={wasActivated}>
              <Input iconName="user" placeholder="Name" setWasActivated={setWasActivated} autoCapitalize="words" />
              <Input iconName="mail" placeholder="Email" setWasActivated={setWasActivated} keyboardType="email-address" />
              {/* cnh */}
              <Input iconName="credit-card" placeholder="DL" setWasActivated={setWasActivated} keyboardType="numeric" />
            </InputSection>

            <Button title="Next" onPress={handleNext} />
          </Form>
        </Main>
      </Container>
    </Pressable>
  );
};

export default SignUpStepOne;
