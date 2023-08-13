import { createPortal } from 'react-dom';
import smallLogo from '../../images/small-logo.svg';
import style from './loader.module.scss';
import { FC } from 'react';

const Loader: FC = () => {
     return createPortal(
          <div className={style.loader}>
               <img src={smallLogo} alt='loader' />
          </div>,
          document.querySelector('#loader') as HTMLDivElement
     );
};

export default Loader;
