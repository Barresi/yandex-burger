import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import style from './login.module.scss';

const LoginPage = () => {
     const [login, setLogin] = useState('');
     const [password, setPassword] = useState('');
     return (
          <div className={style.login}>
               <div className={style.content}>
                    <div className={`${style.title} text text_type_main-large mb-6`}>Вход</div>
                    <Input
                         value={login}
                         name='login'
                         placeholder='E-mail'
                         extraClass='mb-6'
                         onChange={(e) => setLogin(e.target.value)}
                    />
                    <Input
                         value={password}
                         name='password'
                         placeholder='Пароль'
                         type='password'
                         icon={'ShowIcon'}
                         onChange={(e) => setPassword(e.target.value)}
                         extraClass='mb-6'
                    />
                    <Button htmlType='button' type='primary' size='medium' extraClass='mb-20'>
                         Войти
                    </Button>
                    <p className={`${style.p} text text_type_main-default text_color_inactive`}>
                         Вы — новый пользователь? <span className={style.span}>Зарегистрироваться</span>
                    </p>
                    <p className={`${style.p} text text_type_main-default text_color_inactive`}>
                         Забыли пароль? <span>Восстановить пароль</span>
                    </p>
               </div>
          </div>
     );
};

export default LoginPage;
