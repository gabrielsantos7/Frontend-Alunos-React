import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  outline: none;
  border: 2px solid ${colors.disabledLightColor};
  transition: border-color 0.3s ease;
  font-size: 1.5rem;
  border-radius: 5px;
  margin-top: 0.5rem;

  &:focus {
    border-color: ${colors.primaryColor};
  }
`;
