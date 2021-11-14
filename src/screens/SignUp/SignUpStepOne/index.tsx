import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Keyboard, Pressable } from 'react-native';
import * as yup from 'yup';
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

const schema = yup.object().shape({
  driversLicense: yup.string().required('Drivers license is required'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  name: yup.string().required('Name is required'),
});

const SignUpStepOne = () => {
  const [wasActivated, setWasActivated] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [driversLicense, setDriversLicense] = useState('');

  const { navigate } = useNavigation();

  // eslint-disable-next-line consistent-return
  const handleNext = async () => {
    try {
      const data = { name, email, driversLicense };
      await schema.validate(data);

      navigate('SignUpStepTwo', { user: data });
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        return Alert.alert(error.message);
      }
    }
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
              <Title>{'Create your\naccount'}</Title>
              <Subtitle>{'Sign up in a\nfast and easy way'}</Subtitle>
            </MainHeader>
          )}

          <Form wasActivated={wasActivated}>
            <FormTitle>1. Info</FormTitle>

            <InputSection wasActivated={wasActivated}>
              <Input
                iconName="user"
                placeholder="Name"
                setWasActivated={setWasActivated}
                autoCapitalize="words"
                value={name}
                onChangeText={setName}
              />
              <Input
                iconName="mail"
                placeholder="Email"
                setWasActivated={setWasActivated}
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
              <Input
                iconName="credit-card"
                placeholder="DL"
                setWasActivated={setWasActivated}
                autoCapitalize="none"
                keyboardType="numeric"
                value={driversLicense}
                onChangeText={setDriversLicense}
              />
            </InputSection>

            <Button title="Next" onPress={handleNext} disabled={!(name !== '' && email !== '' && driversLicense !== '')} />
          </Form>
        </Main>
      </Container>
    </Pressable>
  );
};

export default SignUpStepOne;
