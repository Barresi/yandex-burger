import { Link, useNavigate } from 'react-router-dom';
import { Button, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import style from './forgot-password.module.scss';
import { sendEmail } from '../../utils/api';

const ForgotPasswordPage = () => {
     const EMAIL_REGEXP =
          /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
     const isEmailValid = (value) => {
          return EMAIL_REGEXP.test(value);
     };

     const [login, setLogin] = useState('');
     const navigate = useNavigate();
     const checkEmail = async () => {
          await sendEmail(login).then((data) => {
               if (data.success && isEmailValid(login)) {
                    navigate('/reset-password');
               }
          });
     };
     return (
          <div className={style.login}>
               <div className={style.content}>
                    <div className={`${style.title} text text_type_main-large mb-6`}>Восстановление пароля</div>
                    <EmailInput
                         value={login}
                         name='login'
                         placeholder='Укажите e-mail'
                         extraClass='mb-6'
                         isIcon={false}
                         onChange={(e) => setLogin(e.target.value)}
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
