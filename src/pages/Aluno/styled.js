import styled from 'styled-components';

export const ProfilePicture = styled.div`
  width: 15rem;
  height: 15rem;
  margin: 2rem auto;
  position: relative;
  overflow: hidden;

  & > * {
    transition: all 0.3s ease;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  & > a {
    display: grid;
    place-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:hover > a {
    opacity: 1;
    filter: brightness(100%)
  }

  &:hover > * {
    filter: brightness(50%);
  }
`;
