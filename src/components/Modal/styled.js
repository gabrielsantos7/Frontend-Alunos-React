import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import * as colors from '../../styles/colors';

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  inset: 0;
  border-top: none !important;
  display: flex;
  justify-content: center !important;
`;

export const ModalWrapper = styled.div`
  width: 500px;
  max-width: 95vw;
  height: 300px;
  display: block !important;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 5rem !important;
  text-align: center;

  h2 {
    font-size: 1.8rem;
  }
`;

export const ModalFooter = styled.div`
  padding-top: 4rem !important;
  border-top: none !important;
  gap: 4rem !important;
  margin: 0 2rem !important;

  button {
    padding: 1rem 1.5rem;
    cursor: pointer;
    border: none;
    border-radius: 0.5rem;
    background-color: ${colors.successColor};
    font-size: 1.5rem;
    color: #fff;
    font-weight: 600;
    opacity: 0.8;
    transition: all 0.2s ease-in-out;

    &:hover {
      opacity: 1;
    }

    &:first-child {
      background-color: ${colors.disabledDarkColor}
    }
  }
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 1rem;
  opacity: 0.8;
  right: 1rem;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

export const Exclamation = styled(AiOutlineExclamationCircle)`
  width: 5rem;
  height: 5rem;
  color: ${colors.errorColor};
  padding-bottom: 1rem;
`;
