import styled from 'styled-components';

export const Title = styled.h1`
  color: ${(prop) => (prop.color ? prop.color : 'black')}
`;
