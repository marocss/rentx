import styled from 'styled-components/native';

interface ContainerProps {
  active: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 6px;
  height: 6px;
  margin-left: 8px;
  border-radius: 3px;
  background-color: ${({ theme, active }) => (active ? theme.colors.title : theme.colors.shape)
};
`;
