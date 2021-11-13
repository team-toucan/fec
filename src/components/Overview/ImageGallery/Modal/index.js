import React from 'react';

import { StyledModal } from './styles';

const Modal = ({ isShowing, setIsShowing, children }) => {
  return (
    <StyledModal style={{ display: isShowing ? 'flex' : 'none' }}>
      {children}
    </StyledModal>
  );
};

export default Modal;
