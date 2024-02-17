import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as colors from '../../config/colors';

export const CreateLink = styled(Link)`
  background-color: ${colors.primaryColor};
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  width: 23rem;
  border-radius: 4rem;
  font-size: 1.5rem;
  letter-spacing: 1px;
  margin-top: 2rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    filter: brightness(80%);
  }
`;

export const AlunosContainer = styled.div`
  margin-top: 2rem;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 0.5rem;

    &+div {
      border-top: 1px solid #eee;
    }
  }
`;

export const IconsContainer = styled.div`
color: ${colors.primaryColor}
`;

export const ProfilePicture = styled.div`
  img {
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 50%;
  }
`;
