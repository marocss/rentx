import React, { useState } from 'react';
import { KeyboardAvoidingView, Pressable, Keyboard } from 'react-native';
import { useTheme } from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { BackButton } from '../../components/BackButton';
import Input from '../../components/Input';
import { useAuth } from '../../hooks/auth';

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
  Menu,
  Option,
  OptionTitle,
  InputSection,
} from './styles';

const Profile = () => {
  const { user, signOut } = useAuth();

  const [option, setOption] = useState<'info' | 'password'>('info');
  const [name, setName] = useState(user.name);
  // eslint-disable-next-line no-unused-vars
  const [email, _] = useState(user.email);
  const [driversLicense, setDriversLicense] = useState(user.driver_license);
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [avatar, setAvatar] = useState(user.avatar ? user.avatar : 'https://images.apilist.fun/adorable_avatars_api.png');

  const theme = useTheme();

  const handleSignOut = () => {
    signOut();
  };

  const handleAvatarUpdate = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.cancelled) {
      setAvatar(result.uri);
    }
  };

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <Pressable onPress={Keyboard.dismiss}>
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
              <Avatar source={{ uri: avatar }} />
              <AddAvatarButton onPress={handleAvatarUpdate}>
                <Feather name="camera" size={24} color={theme.colors.white} />
              </AddAvatarButton>
            </AvatarContainer>
          </Header>
          <Main>
            <Menu>
              <Option active={option === 'info'} style={{ marginRight: 24 }} onPress={() => setOption('info')}>
                <OptionTitle active={option === 'info'}>Info</OptionTitle>
              </Option>
              <Option active={option === 'password'} onPress={() => setOption('password')}>
                <OptionTitle active={option === 'password'}>Update password</OptionTitle>
              </Option>
            </Menu>

            {option === 'info'
            && (
              <InputSection>
                <Input
                  iconName="user"
                  placeholder="Name"
                  setWasActivated={() => {}}
                  autoCapitalize="words"
                  value={name}
                  onChangeText={setName}
                  // defaultValue={user.name}
                />
                <Input
                  iconName="mail"
                  placeholder="Email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onChangeText={() => {}}
                  value={email}
                  setWasActivated={() => {}}
                  editable={false}
                />
                <Input
                  iconName="credit-card"
                  placeholder="DL"
                  setWasActivated={() => {}}
                  autoCapitalize="none"
                  keyboardType="numeric"
                  value={driversLicense}
                  onChangeText={setDriversLicense}
                />
              </InputSection>
            )}

            {option === 'password'
            && (
              <InputSection>
                <Input
                  iconName="lock"
                  placeholder="Current password"
                  autoCapitalize="none"
                  keyboardType="default"
                  onChangeText={setPassword}
                  value={password}
                  secureTextEntry
                  isPassword
                  setWasActivated={() => {}}
                />
                <Input
                  iconName="lock"
                  placeholder="New password"
                  autoCapitalize="none"
                  keyboardType="default"
                  onChangeText={setNewPassword}
                  value={newPassword}
                  secureTextEntry
                  isPassword
                  setWasActivated={() => {}}
                />
                <Input
                  iconName="lock"
                  placeholder="Repeat new password"
                  keyboardType="default"
                  onChangeText={setPasswordConfirmation}
                  value={passwordConfirmation}
                  secureTextEntry
                  isPassword
                  setWasActivated={() => {}}
                />
              </InputSection>
            )}

          </Main>
        </Container>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default Profile;
