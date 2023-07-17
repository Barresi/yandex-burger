import { NavLink, Outlet } from 'react-router-dom';

import style from './profile.module.scss';

const ProfilePage = () => {
     return (
          <div className={style.profile}>
               <div className={style.menu}>
                    <nav className={style.links}>
                         <NavLink
                              to=''
                              end
                              className={({ isActive }) =>
                                   isActive
                                        ? `${style.link} ${style.linkActive} text text_type_main-medium`
                                        : `${style.link} text text_type_main-medium`
                              }>
                              Профиль
                         </NavLink>
                         <NavLink
                              to='orders'
                              className={({ isActive }) =>
                                   isActive
                                        ? `${style.link} ${style.linkActive} text text_type_main-medium`
                                        : `${style.link} text text_type_main-medium`
                              }>
                              История заказов
                         </NavLink>
                         <li className={`${style.link} text text_type_main-medium text_color_inactive`}>Выход</li>
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
