import styled from 'styled-components';
import { disabledDarkColor, primaryColor } from '../../config/colors';

export const CreateAccount = styled.p`
  color: ${disabledDarkColor};

  a {
    color: ${disabledDarkColor};
    &:hover {
      color: ${primaryColor};
      text-decoration: underline;
    }
  }
`;
