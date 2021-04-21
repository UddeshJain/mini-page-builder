import React from 'react';
import {
  BackDropContainer,
  ModalContainer,
  Header,
  CloseButton,
  HeadingText,
} from './style';

const Modal = ({ open, onClose, children, heading }) => {
  return (
    <BackDropContainer open={open} onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <Header>
          <HeadingText>{heading}</HeadingText>
          <CloseButton onClick={onClose}>&#215;</CloseButton>
        </Header>
        {children}
      </ModalContainer>
    </BackDropContainer>
  );
};

export default Modal;
