import { Link } from 'react-router-dom';
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import { useAuth } from '../../utils/hooks/useAuth';
import style from './register.module.scss';

const RegisterPage = () => {
     const [name, setName] = useState('');
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const { registProfile } = useAuth();
     const sendData = async () => {
          registProfile({ name, email, password });
     };
     return (
          <div className={style.login}>
               <div className={style.content}>
                    <div className={`${style.title} text text_type_main-large mb-6`}>Регистрация</div>
                    <Input
                         value={name}
                         name='name'
                         placeholder='Имя'
                         extraClass='mb-6'
                         onChange={(e) => setName(e.target.value)}
                    />
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
                         icon={'HideIcon'}
                         onChange={(e) => setPassword(e.target.value)}
                         extraClass='mb-6'
                    />
                    <Button htmlType='button' type='primary' size='medium' extraClass='mb-20' onClick={sendData}>
                         Зарегистрироваться
                    </Button>
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
