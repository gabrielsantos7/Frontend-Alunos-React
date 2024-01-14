import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Nav = styled.nav`
  background-color: ${primaryColor};
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  color: #fff;

  a {
    font-weight: bold;
    font-size: 1.5rem
  }
`;
