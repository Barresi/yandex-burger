import { NavLink, Outlet } from 'react-router-dom';
import { useAuth } from '../../utils/hooks/useAuth';
import style from './profile.module.scss';

const ProfilePage = () => {
     const { signOut } = useAuth();

     const exitProfile = () => {
          signOut();
     };

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
