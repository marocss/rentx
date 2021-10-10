import React from 'react';
import { SvgProps } from 'react-native-svg';

import {
  Container,
  Name
} from './styles';

interface SpecificationCardProps {
  name: string;
  icon: React.FC<SvgProps>
}

export const SpecificationCard = ({
  name,
  icon: Icon
}: SpecificationCardProps) => {

  return (
    <Container>
      <Icon color="#47474D" width={32} height={32} />
      <Name>{name}</Name>
    </Container>
  )
}