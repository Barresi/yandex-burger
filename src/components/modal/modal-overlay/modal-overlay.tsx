import style from './modal-overlay.module.scss';
import { FC, MouseEvent } from 'react';

const ModalOverlay: FC<{ onClose: () => void }> = ({ onClose }) => {
     const closeModalClick = (e: MouseEvent<HTMLDivElement>) => {
          onClose();
          e.stopPropagation();
     };

     return <div className={style.overlay} onClick={closeModalClick} />;
};

export default ModalOverlay;
