import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { useAuth } from '../../../../utils/hooks/useAuth';
import { getCookie } from '../../../../utils/cookie';
import style from './edit-profile-info.module.scss';

const EditProfileInfo = () => {
     const { editProfileInfo } = useAuth();
     const accessToken = getCookie('accessToken');
     const { name, email } = useSelector((store) => store.profileInfo.user);
     const [userName, setUserName] = useState(name);
     const [userEmail, setUserEmail] = useState(email);
     const [password, setPassword] = useState('');

     const [isActiveBtns, setActiveBtns] = useState(false);

     const resetData = () => {
          setUserName(name);
          setUserEmail(email);
          setPassword('');
     };

     const editProfile = async (e) => {
          e.preventDefault();
          editProfileInfo({ name: userName, email: userEmail, password, accessToken }).then((data) =>
               data.payload.success ? setPassword('') : null
          );
     };

     useEffect(() => {
          if (userName !== name || email !== userEmail || password !== '') {
               setActiveBtns(true);
          } else {
               setActiveBtns(false);
          }
     }, [userName, userEmail, password, name, email]);
     return (
          <form className={style.form} onSubmit={editProfile}>
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
