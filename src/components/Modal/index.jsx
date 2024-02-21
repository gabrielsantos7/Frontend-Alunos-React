import { useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from '@react-spring/web';
import {
  Background,
  CloseModalButton,
  ModalWrapper,
  ModalContent,
  ModalFooter,
  Exclamation,
} from './styled';
import { Title } from '../../styles/GlobalStyles';

const Modal = ({
  showModal,
  setShowModal,
  objectToDelete,
  handleConfirmDelete,
  message,
  confirmText,
}) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) setShowModal(false);
    },
    [setShowModal, showModal],
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal((prev) => !prev)}
              />
              <ModalContent>
                <Exclamation />
                <Title>{message}</Title>
                <p>{confirmText}</p>
              </ModalContent>
              <ModalFooter>
                <button
                  type='button'
                  onClick={() => setShowModal((prev) => !prev)}
                >
                  Voltar
                </button>
                <button
                  type='button'
                  onClick={() => {
                    setShowModal(false);
                    handleConfirmDelete(objectToDelete);
                  }}
                >
                  Confirmar
                </button>
              </ModalFooter>
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};

Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  objectToDelete: PropTypes.object,
  handleConfirmDelete: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  confirmText: PropTypes.string.isRequired,
};

export default Modal;
