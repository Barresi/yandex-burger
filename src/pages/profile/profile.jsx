import { useState } from 'react';
import { Button, EmailInput, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './profile.module.scss';

const ProfilePage = () => {
     const [name, setName] = useState('Боб');
     const [login, setLogin] = useState('bob@example.com');
     const [password, setPassword] = useState('');
     return (
          <div className={style.profile}>
               <div className={style.menu}>
                    <ul className={style.links}>
                         <li className={`${style.link} text text_type_main-medium`}>Профиль</li>
                         <li className={`${style.link} text text_type_main-medium text_color_inactive`}>
                              История заказов
                         </li>
                         <li className={`${style.link} text text_type_main-medium text_color_inactive`}>Выход</li>
                    </ul>
                    <div className={`${style.desc} text text_type_main-default`}>
                         В этом разделе вы можете изменить свои персональные данные
                    </div>
               </div>
               <form className={style.form}>
                    <Input
                         value={name}
                         name='name'
                         placeholder='Имя'
                         icon={'EditIcon'}
                         onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                         value={login}
                         type='email'
                         name='login'
                         placeholder='Логин'
                         icon={'EditIcon'}
                         onChange={(e) => setLogin(e.target.value)}
                    />
                    <Input
                         value={password}
                         name='password'
                         placeholder='Пароль'
                         icon={'EditIcon'}
                         onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className={style.btns}>
                         <Button htmlType='button' type='secondary' size='medium'>
                              Отмена
                         </Button>
                         <Button htmlType='button' type='primary' size='medium'>
                              Сохранить
                         </Button>
                    </div>
               </form>
          </div>
     );
};

export default ProfilePage;
