import { FC, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import smallLogo from '../../images/small-logo.svg';
import { ProfileIcon, Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import HeaderNav from './nav/header-nav';
import style from './app-header.module.scss';
import burger from '../../images/burger.png';
import { clx } from '../../utils/set-active-links';
import Burger from '../burger/burger';

const AppHeader: FC = () => {
     const [isActiveBurger, setActiveBurger] = useState(false);
     return (
          <>
               <header className={style.header}>
                    <div className={style.wrap}>
                         <HeaderNav />

                         <Link to='/' className={style.logo}>
                              <Logo />
                         </Link>

                         <NavLink
                              to='/profile'
                              className={({ isActive }) =>
                                   clx({ [style.profile]: true, [style.profileActive]: isActive })
                              }>
                              <ProfileIcon type={'secondary'} />
                              <div
                                   className={`
                                             ${'text_color_inactive'} 
                                             text text_type_main-default
                                        `}>
                                   Личный кабинет
                              </div>
                         </NavLink>
                    </div>

                    <div className={style.mobile}>
                         <Link to='/' className={style.burger}>
                              <img src={smallLogo} alt='mobileBurger' />
                         </Link>
                         <button className={style.burger} onClick={() => setActiveBurger(true)}>
                              <img src={burger} alt='burger' />
                         </button>
                    </div>
               </header>
               <Burger isActive={isActiveBurger} setActive={setActiveBurger} />
          </>
     );
};

export default AppHeader;
