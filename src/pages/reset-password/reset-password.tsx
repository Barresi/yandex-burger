import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { FC, FormEvent, useState } from 'react';
import style from './reset-password.module.scss';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { sendPassword } from '../../utils/api';

const ResetPasswordPage: FC = () => {
     const [isHidePassword, setIsHidePassword] = useState(true);
     const [password, setPassword] = useState('');
     const [emailCode, setEmailCode] = useState('');
     const [error, setError] = useState<string | null>(null);
     const navigate = useNavigate();
     const { state } = useLocation();
     const changePassword = async (e: FormEvent) => {
          e.preventDefault();
          await sendPassword(password, emailCode)
               .then((data) => {
                    if (data.success) {
                         navigate('/login', { replace: true });
                    } else {
                         setError(data.message);
                    }
               })
               .catch(() => setError('Что-то пошло не так('));
     };

     if (!state) {
          return <Navigate to='/' replace />;
     }

     return (
          <div className={style.login}>
               <div className={style.content}>
                    <div className={`${style.error} text text_type_main-large`}>{error}</div>
                    <div className={`${style.title} text text_type_main-large mb-6`}>Восстановление пароля</div>
                    <form onSubmit={changePassword} className={style.form}>
                         <Input
                              value={password}
                              name='password'
                              placeholder='Введите новый пароль'
                              extraClass='mb-6'
                              type={isHidePassword ? 'password' : 'text'}
                              icon={isHidePassword ? 'ShowIcon' : 'HideIcon'}
                              onIconClick={() => setIsHidePassword(!isHidePassword)}
                              onChange={(e) => setPassword(e.target.value)}
                         />
                         <Input
                              value={emailCode}
                              name='check-email'
                              placeholder='Введите код из письма'
                              extraClass='mb-6'
                              onChange={(e) => setEmailCode(e.target.value)}
                         />

                         <Button htmlType='submit' type='primary' size='medium' extraClass='mb-20'>
                              Сохранить
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

export default ResetPasswordPage;
