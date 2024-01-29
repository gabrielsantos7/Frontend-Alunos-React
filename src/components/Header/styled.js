import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Nav = styled.nav`
  background-color: ${primaryColor};
  padding: 2rem;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
`;
