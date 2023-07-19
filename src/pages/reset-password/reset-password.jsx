import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import style from './reset-password.module.scss';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { sendPassword } from '../../utils/api';
import { useSelector } from 'react-redux';

const ResetPasswordPage = () => {
     const { isUserLoaded } = useSelector((store) => store.profileInfo);
     const [password, setPassword] = useState('');
     const [emailCode, setEmailCode] = useState('');
     const navigate = useNavigate();
     const { state } = useLocation();
     const changePassword = async () => {
          await sendPassword(password, emailCode).then((data) => {
               if (data.success) {
                    navigate('/login', { replace: true });
               }
               alert(data.message);
          });
     };

     if (isUserLoaded || !state) {
          return <Navigate to='/' replace />;
     }

     return (
          <div className={style.login}>
               <div className={style.content}>
                    <div className={`${style.title} text text_type_main-large mb-6`}>Восстановление пароля</div>
                    <Input
                         value={password}
                         name='password'
                         placeholder='Введите новый пароль'
                         extraClass='mb-6'
                         icon='HideIcon'
                         onChange={(e) => setPassword(e.target.value)}
                    />
                    <Input
                         value={emailCode}
                         name='check-email'
                         placeholder='Введите код из письма'
                         extraClass='mb-6'
                         onChange={(e) => setEmailCode(e.target.value)}
                    />

                    <Button htmlType='button' type='primary' size='medium' extraClass='mb-20' onClick={changePassword}>
                         Сохранить
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

export default ResetPasswordPage;
