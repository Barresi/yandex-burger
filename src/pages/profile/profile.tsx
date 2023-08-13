import { FC } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import style from './profile.module.scss';
import { useAppDispatch } from '../../utils/hooks/redux-hook';
import { logout } from '../../services/auth/auth';
import { clx } from '../../utils/set-active-links';

const ProfilePage: FC = () => {
     const dispatch = useAppDispatch();

     const exitProfile = () => {
          dispatch(logout());
     };

     return (
          <div className={style.profile}>
               <div className={style.menu}>
                    <nav className={style.links}>
                         <NavLink
                              to=''
                              end
                              className={({ isActive }) =>
                                   clx({
                                        [style.link]: true,
                                        [style.linkActive]: isActive,
                                        'text text_type_main-medium': true,
                                   })
                              }>
                              Профиль
                         </NavLink>
                         <NavLink
                              to='orders'
                              className={({ isActive }) =>
                                   clx({
                                        [style.link]: true,
                                        [style.linkActive]: isActive,
                                        'text text_type_main-medium': true,
                                   })
                              }>
                              История заказов
                         </NavLink>
                         <p
                              className={`${style.link} text text_type_main-medium text_color_inactive`}
                              onClick={exitProfile}>
                              Выход
                         </p>
                    </nav>
                    <div className={`${style.desc} text text_type_main-default`}>
                         В этом разделе вы можете изменить свои персональные данные
                    </div>
               </div>
               <Outlet />
          </div>
     );
};

export default ProfilePage;
