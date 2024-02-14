import { useCallback, useEffect, useRef } from 'react';
import Proptypes from 'prop-types';
import { useSpring, animated } from '@react-spring/web';
import {
  Background,
  CloseModalButton,
  ModalWrapper,
  ModalContent,
  ModalFooter,
  Exclamation,
} from './styled';
import axios from '../../services/axios';
import { toast } from 'react-toastify';

const Modal = ({
  showModal,
  setShowModal,
  studentToDelete,
  handleConfirmDelete,
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

  const handleDelete = () => {
    axios
      .delete(`/alunos/${studentToDelete.id}`)
      .then(() => {
        toast.success('Aluno(a) excluído com sucesso!');
        setShowModal(false);
      })
      .catch((errors) => {
        errors.map((error) => toast.error(error));
      });
  };

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
                <h2>Deseja excluir o(a) aluno(a) {studentToDelete.nome}?</h2>
                <p>Esta ação é irreversível e removerá o aluno do sistema.</p>
              </ModalContent>
              <ModalFooter>
                <button
                  type='button'
                  onClick={() => setShowModal((prev) => !prev)}
                >
                  Voltar
                </button>
                <button type='button' onClick={handleConfirmDelete}>
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
  showModal: Proptypes.bool.isRequired,
  setShowModal: Proptypes.func.isRequired,
  studentToDelete: Proptypes.shape({
    id: Proptypes.number,
    nome: Proptypes.string,
  }).isRequired,
  handleConfirmDelete: Proptypes.func.isRequired,
};

export default Modal;
