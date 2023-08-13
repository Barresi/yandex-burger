import { FormEvent, useEffect, useState } from 'react';
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { getCookie } from '../../../../utils/cookie';
import style from './edit-profile-info.module.scss';
import { useAppDispatch, useAppSelector } from '../../../../utils/hooks/redux-hook';
import { editProfile } from '../../../../services/auth/auth';

const EditProfileInfo = () => {
     const accessToken = getCookie('accessToken') as string;
     const dispatch = useAppDispatch();
     const { name, email } = useAppSelector((store) => store.profileInfo.user);
     const [userName, setUserName] = useState(name);
     const [userEmail, setUserEmail] = useState(email);
     const [password, setPassword] = useState('');
     const [isActiveBtns, setActiveBtns] = useState(false);

     const resetData = () => {
          setUserName(name);
          setUserEmail(email);
          setPassword('');
     };

     const editProfileInfo = async (e: FormEvent) => {
          e.preventDefault();

          const resultAction = await dispatch(editProfile({ name: userName, email: userEmail, password, accessToken }));

          if (editProfile.fulfilled.match(resultAction)) {
               setPassword('');
          } else {
               console.log(resultAction.error);
          }
     };

     useEffect(() => {
          if (userName !== name || email !== userEmail || password !== '') {
               setActiveBtns(true);
          } else {
               setActiveBtns(false);
          }
     }, [userName, userEmail, password, name, email]);
     return (
          <form className={style.form} onSubmit={editProfileInfo}>
               <Input
                    value={userName}
                    name='name'
                    placeholder='Имя'
                    icon={'EditIcon'}
                    onChange={(e) => {
                         setUserName(e.target.value);
                    }}
               />
               <Input
                    value={userEmail}
                    type='email'
                    name='login'
                    placeholder='Логин'
                    icon={'EditIcon'}
                    onChange={(e) => {
                         setUserEmail(e.target.value);
                    }}
               />
               <Input
                    value={password}
                    name='password'
                    placeholder='Пароль'
                    icon={'EditIcon'}
                    onChange={(e) => {
                         setPassword(e.target.value);
                    }}
               />
               {isActiveBtns && (
                    <div className={style.btns}>
                         <Button htmlType='button' type='secondary' size='medium' onClick={resetData}>
                              Отмена
                         </Button>
                         <Button htmlType='submit' type='primary' size='medium'>
                              Сохранить
                         </Button>
                    </div>
               )}
          </form>
     );
};

export default EditProfileInfo;
