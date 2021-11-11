import React from 'react';

import { StyledModal } from './styles';

const Modal = ({ isShowing, setIsShowing, children }) => {
  return (
    <StyledModal style={{ display: isShowing ? 'block' : 'none' }}>
      <div className="modal-content">
        <span className="close" onClick={() => setIsShowing(false)}>
          &times;
        </span>
        {children}
      </div>
    </StyledModal>
  );
};

export default Modal;
