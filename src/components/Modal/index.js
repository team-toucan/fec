import React from 'react';

const Modal = ({ isShowing, setIsShowing, children }) => {
  console.log('🚀 ~ file: index.js ~ line 4 ~ Modal ~ children', children);
  return (
    <div className="modal" style={{ display: isShowing ? 'block' : 'none' }}>
      <div className="modal-content">
        <span className="close" onClick={() => setIsShowing(false)}>
          &times;
        </span>
        <p>Some text in the Modal..</p>
        {children}
      </div>
    </div>
  );
};

export default Modal;
