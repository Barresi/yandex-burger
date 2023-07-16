import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import style from './forgot-password.module.scss';

const ForgotPasswordPage = () => {
     const [login, setLogin] = useState('');

     return (
          <div className={style.login}>
               <div className={style.content}>
                    <div className={`${style.title} text text_type_main-large mb-6`}>Восстановление пароля</div>
                    <Input
                         value={login}
                         name='login'
                         placeholder='Укажите e-mail'
                         extraClass='mb-6'
                         onChange={(e) => setLogin(e.target.value)}
                    />

                    <Button htmlType='button' type='primary' size='medium' extraClass='mb-20'>
                         Восстановить
                    </Button>

                    <p className={`${style.p} text text_type_main-default text_color_inactive`}>
                         Вспомнили пароль? <span>Войти</span>
                    </p>
               </div>
          </div>
     );
};

export default ForgotPasswordPage;
