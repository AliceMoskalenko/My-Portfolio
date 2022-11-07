import React from "react";
import PropTypes from "prop-types";

import "./Modal.scss";

const Modal = ({ title, mainText, modalBtns, closeModal }) => {
  return (
    <>
      <div className="modal">
        <div className="modalHeader">
          <h2 className="modalHeaderText">{title}</h2>
          <span onClick={closeModal} className="closeModal"></span>
        </div>
        <div className="modalBody">
          <p className="modalBodyText">{mainText}</p>
        </div>
        <div className="modalFooter">{modalBtns}</div>
      </div>
    </>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  mainText: PropTypes.string,
  firstBtnText: PropTypes.string,
  secondBtnText: PropTypes.string,
  increaseCounter: PropTypes.func,
};

export default Modal;
