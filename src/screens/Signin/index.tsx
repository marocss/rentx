import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { Button } from '../../components/Button';

import {
  Container, Header, Title, Subtitle, Footer,
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
