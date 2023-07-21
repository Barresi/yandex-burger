import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Button, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import style from './forgot-password.module.scss';
import { sendEmail } from '../../utils/api';
import { useSelector } from 'react-redux';

const ForgotPasswordPage = () => {
     const EMAIL_REGEXP =
          /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
     const isEmailValid = (value) => {
          return EMAIL_REGEXP.test(value);
     };

     const { isUserLoaded } = useSelector((store) => store.profileInfo);
     const [desc, setDesc] = useState('');
     const [login, setLogin] = useState('');
     const navigate = useNavigate();
     const checkEmail = async () => {
          if (isEmailValid(login)) {
               await sendEmail(login).then((data) => {
                    if (data.success) {
                         setDesc('');
                         navigate('/reset-password', { replace: true, state: true });
                    } else {
                         setDesc(data.message);
                    }
               });
          }
     };
     if (isUserLoaded) {
          return <Navigate to='/' replace />;
     }
     return (
          <div className={style.login}>
               <div className={style.content}>
                    <div className={`${style.error} text text_type_main-large`}>{desc}</div>
                    <div className={`${style.title} text text_type_main-large mb-6`}>Восстановление пароля</div>
                    <EmailInput
                         value={login}
                         name='login'
                         placeholder='Укажите e-mail'
                         extraClass='mb-6'
                         isIcon={false}
                         onChange={(e) => setLogin(e.target.value)}
                         errorText='Введите ваш E-mail'
                    />

                    <Button htmlType='button' type='primary' size='medium' extraClass='mb-20' onClick={checkEmail}>
                         Восстановить
                    </Button>

                    <p className={`${style.p} text text_type_main-default text_color_inactive`}>
                         Вспомнили пароль?{' '}
                         <Link to='/login' className={style.link}>
                              Войти
                         </Link>
                    </p>
               </div>
          </div>
     );
};

export default ForgotPasswordPage;
