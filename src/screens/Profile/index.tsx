import React from 'react';
import { useTheme } from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Feather } from '@expo/vector-icons';
import { BackButton } from '../../components/BackButton';

import {
  Container,
  Header,
  HeaderTop,
  HeaderTitle,
  LogoutButton,
  AvatarContainer,
  Avatar,
  AddAvatarButton,
  Main,
} from './styles';

const Profile = () => {
  const theme = useTheme();

  const handleSignOut = () => {

  };
  return (
    <Container>
      <Header>
        <HeaderTop>
          <BackButton color={theme.colors.white} />
          <HeaderTitle>Edit Profile</HeaderTitle>
          <LogoutButton onPress={handleSignOut}>
            <Feather name="power" size={24} color={theme.colors.text_light} />
          </LogoutButton>
        </HeaderTop>

        <AvatarContainer>
          <Avatar source={{ uri: 'https://github.com/marocss.png' }} />
          <AddAvatarButton onPress={() => {}}>
            <Feather name="camera" size={24} color={theme.colors.white} />
          </AddAvatarButton>
        </AvatarContainer>
      </Header>
      <Main>

      </Main>
    </Container>
  );
};

export default Profile;
