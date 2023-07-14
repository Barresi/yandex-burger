import { createPortal } from 'react-dom';
import smallLogo from '../../../images/small-logo.svg';
import style from './loader-constructor.module.scss';

const Loader = () => {
     return createPortal(
          <div className={style.loader}>
               <img src={smallLogo} alt='loader' />
          </div>,
          document.querySelector('#loader')
     );
};

export default Loader;
