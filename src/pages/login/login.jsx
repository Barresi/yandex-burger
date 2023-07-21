import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, EmailInput, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import style from './login.module.scss';
import { useAuth } from '../../utils/hooks/useAuth';

const LoginPage = () => {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [isHidePassword, setIsHidePassword] = useState(true);
     const [error, setError] = useState(null);

     const navigate = useNavigate();
     const { state } = useLocation();
     const { signIn } = useAuth();
     const sendData = async (e) => {
          e.preventDefault();
          await signIn({ email, password }).then((data) =>
               data.payload?.success
                    ? navigate(`${state ? state.pathname : '/'}`, { replace: true })
                    : setError(data.error.message)
          );
     };

     return (
          <div className={style.login}>
               <div className={style.content}>
                    <div className={`${style.error} text text_type_main-large`}>{error}</div>
                    <div className={`${style.title} text text_type_main-large mb-6`}>Вход</div>
                    <form onSubmit={sendData} className={style.form}>
                         <EmailInput
                              value={email}
                              name='login'
                              placeholder='E-mail'
                              extraClass='mb-6'
                              onChange={(e) => setEmail(e.target.value)}
                              errorText='Введите ваш E-mail'
                         />
                         <Input
                              value={password}
                              name='password'
                              placeholder='Пароль'
                              type={isHidePassword ? 'password' : 'text'}
                              icon={isHidePassword ? 'ShowIcon' : 'HideIcon'}
                              onChange={(e) => setPassword(e.target.value)}
                              extraClass='mb-6'
                              onIconClick={() => setIsHidePassword(!isHidePassword)}
                         />
                         <Button htmlType='submit' type='primary' size='medium' extraClass='mb-20'>
                              Войти
                         </Button>
                    </form>

                    <p className={`${style.p} text text_type_main-default text_color_inactive`}>
                         Вы — новый пользователь?{' '}
                         <Link to='/register' className={style.link}>
                              Зарегистрироваться
                         </Link>
                    </p>
                    <p className={`${style.p} text text_type_main-default text_color_inactive`}>
                         Забыли пароль?{' '}
                         <Link to='/forgot-password' className={style.link}>
                              Восстановить пароль
                         </Link>
                    </p>
               </div>
          </div>
     );
};

export default LoginPage;
