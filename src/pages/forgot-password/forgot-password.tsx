import { Link, useNavigate } from 'react-router-dom';
import { Button, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { FC, FormEvent, useState } from 'react';
import style from './forgot-password.module.scss';
import { sendEmail } from '../../utils/api';

const ForgotPasswordPage: FC = () => {
     const [desc, setDesc] = useState('');
     const [login, setLogin] = useState('');
     const navigate = useNavigate();
     const checkEmail = async (e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();

          await sendEmail(login).then((data) => {
               if (data.success) {
                    setDesc('');
                    navigate('/reset-password', { replace: true, state: true });
               } else {
                    setDesc(data.message);
               }
          });
     };

     return (
          <div className={style.login}>
               <div className={style.content}>
                    <div className={`${style.error} text text_type_main-large`}>{desc}</div>
                    <div className={`${style.title} text text_type_main-large mb-6`}>Восстановление пароля</div>
                    <form onSubmit={checkEmail} className={style.form}>
                         <EmailInput
                              value={login}
                              name='login'
                              placeholder='Укажите e-mail'
                              extraClass='mb-6'
                              isIcon={false}
                              onChange={(e) => setLogin(e.target.value)}
                              errorText='Введите ваш E-mail'
                         />

                         <Button htmlType='submit' type='primary' size='medium' extraClass='mb-20'>
                              Восстановить
                         </Button>
                    </form>

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
