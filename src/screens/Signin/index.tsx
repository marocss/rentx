import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { Button } from '../../components/Button';
import Input from '../../components/Input';

import {
  Container, Header, Title, Subtitle, InputSection, Footer,
} from './styles';

export const Signin = () => {
  const theme = useTheme();

  return (
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
        <Input iconName="mail" />
        <Input iconName="lock" />
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
  );
};
