import { Link, useNavigate } from 'react-router-dom';
import { Button, EmailInput, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import { useAuth } from '../../utils/hooks/useAuth';
import style from './register.module.scss';

const RegisterPage = () => {
     const [name, setName] = useState('');
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [isHidePassword, setIsHidePassword] = useState(true);
     const [error, setError] = useState(null);

     const navigate = useNavigate();
     const { registProfile } = useAuth();
     const sendData = async (e) => {
          e.preventDefault();
          registProfile({ name, email, password }).then((data) =>
               data.payload?.success ? navigate('/', { replace: true }) : setError(data.error.message)
          );
     };

     return (
          <div className={style.login}>
               <div className={style.content}>
                    <div className={`${style.error} text text_type_main-large`}>{error}</div>
                    <div className={`${style.title} text text_type_main-large mb-6`}>Регистрация</div>
                    <form className={style.form} onSubmit={sendData}>
                         <Input
                              value={name}
                              name='name'
                              placeholder='Имя'
                              extraClass='mb-6'
                              onChange={(e) => setName(e.target.value)}
                         />
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
                              type={isHidePassword ? 'password' : 'text'}
                              icon={isHidePassword ? 'ShowIcon' : 'HideIcon'}
                              placeholder='Пароль'
                              onChange={(e) => setPassword(e.target.value)}
                              extraClass='mb-6'
                              onIconClick={() => setIsHidePassword(!isHidePassword)}
                         />
                         <Button htmlType='submit' type='primary' size='medium' extraClass='mb-20'>
                              Зарегистрироваться
                         </Button>
                    </form>

                    <p className={`${style.p} text text_type_main-default text_color_inactive`}>
                         Уже зарегистрированы?{' '}
                         <Link to='/login' className={style.link}>
                              Войти
                         </Link>
                    </p>
               </div>
          </div>
     );
};

export default RegisterPage;
