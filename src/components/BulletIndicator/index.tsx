/* eslint-disable react/require-default-props */
import React from 'react';

import { Container } from './styles';

interface BulletIndicatorProps {
  active?: boolean;
}

const BulletIndicator = ({ active = false }: BulletIndicatorProps) => {
  return (
    <Container active={active} />
  );
};

export default BulletIndicator;
