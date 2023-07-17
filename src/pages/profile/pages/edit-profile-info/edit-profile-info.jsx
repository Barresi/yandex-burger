import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './edit-profile-info.module.scss';

const EditProfileInfo = () => {
     const [name, setName] = useState(useSelector((store) => store.profileInfo.user.name));
     const [login, setLogin] = useState(useSelector((store) => store.profileInfo.user.email));
     const [password, setPassword] = useState('');

     return (
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
     );
};

export default EditProfileInfo;
