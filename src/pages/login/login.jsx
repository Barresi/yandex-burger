import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import style from './login.module.scss';
import { useAuth } from '../../utils/hooks/useAuth';
import { useSelector } from 'react-redux';

const LoginPage = () => {
     const { isUserLoaded } = useSelector((store) => store.profileInfo);

     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [error, setError] = useState(null);

     const navigate = useNavigate();
     const { state } = useLocation();
     const { signIn } = useAuth();
     const sendData = async () => {
          await signIn({ email, password }).then((data) =>
               data.payload.success
                    ? navigate(`${state ? state.pathname : '/'}`, { replace: true })
                    : setError(data.payload.message)
          );
     };

     if (isUserLoaded) {
          return <Navigate to='/' replace />;
     }

     return (
          <div className={style.login}>
               <div className={style.content}>
                    <div className={`${style.error} text text_type_main-large`}>{error}</div>
                    <div className={`${style.title} text text_type_main-large mb-6`}>Вход</div>
                    <Input
                         value={email}
                         name='login'
                         placeholder='E-mail'
                         extraClass='mb-6'
                         onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                         value={password}
                         name='password'
                         placeholder='Пароль'
                         //type='password'
                         icon={'ShowIcon'}
                         onChange={(e) => setPassword(e.target.value)}
                         extraClass='mb-6'
                    />
                    <Button htmlType='button' type='primary' size='medium' extraClass='mb-20' onClick={sendData}>
                         Войти
                    </Button>
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
