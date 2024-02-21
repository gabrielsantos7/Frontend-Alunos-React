import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { disabledDarkColor, primaryColor } from '../../styles/colors';

export const Paragraph = styled.p`
  color: ${disabledDarkColor};
  font-size: 1.7rem;
  padding: 3rem 0;
  font-weight: bold;
`;

export const HomeLink = styled(Link)`
  padding: 1rem 2rem;
  background-color: ${primaryColor};
  color: white;
  border-radius: 6px;
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;
