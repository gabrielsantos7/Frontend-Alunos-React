import styled from 'styled-components';

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
`;

export const ProfilePicture = styled.div`
  img {
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 50%;
  }
`;
