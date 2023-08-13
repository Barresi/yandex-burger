import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './modal-error.module.scss';
import { FC } from 'react';

const ModalError: FC<{ error: string }> = ({ error }) => {
     return (
          <>
               <Logo />
               <div className={`${style.title} text text_type_main-large`}>{'Упс, что-то пошло не так :('}</div>
               <div className={`${style.desc} text text_type_main-medium`}>{error}</div>
          </>
     );
};

export default ModalError;
