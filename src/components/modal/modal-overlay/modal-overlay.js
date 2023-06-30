import PropTypes from "prop-types";

import style from "./modal-overlay.module.css";

const ModalOverlay = ({ children, setIsActiveModal }) => {
     const closeModalClick = (e) => {
          if (e.target === e.currentTarget) {
               setIsActiveModal(false);
          }
          e.stopPropagation();
     };

     return (
          <div className={style.overlay} onClick={closeModalClick}>
               {children}
          </div>
     );
};

ModalOverlay.propTypes = {
     children: PropTypes.element.isRequired,
     setIsActiveModal: PropTypes.func.isRequired,
};

export default ModalOverlay;
