import PropTypes from "prop-types";
import style from "./modal-overlay.module.scss";

const ModalOverlay = ({ onClose }) => {
     const closeModalClick = (e) => {
          onClose();
          e.stopPropagation();
     };

     return <div className={style.overlay} onClick={closeModalClick} />;
};

ModalOverlay.propTypes = {
     onClose: PropTypes.func.isRequired,
};

export default ModalOverlay;
