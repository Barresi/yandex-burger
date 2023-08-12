import { Link, useNavigate } from 'react-router-dom';
import { Button, EmailInput, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { FC, FormEvent, useState } from 'react';
import style from './register.module.scss';
import { register } from '../../services/auth/auth';
import { useAppDispatch } from '../../utils/hooks/redux-hook';

const RegisterPage: FC = () => {
     const [name, setName] = useState('');
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [isHidePassword, setIsHidePassword] = useState(true);
     const [error, setError] = useState<string | null>(null);

     const navigate = useNavigate();
     const dispatch = useAppDispatch();

     const sendData = async (e: FormEvent) => {
          e.preventDefault();
          const resultAction = await dispatch(register({ name, email, password }));

          if (register.fulfilled.match(resultAction)) {
               navigate('/', { replace: true });
          } else {
               resultAction.error.message ? setError(resultAction.error.message) : setError('Что-то пошло не так(');
          }
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
                              // @ts-ignore
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
