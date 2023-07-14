import smallLogo from '../../images/small-logo.svg';
import { ProfileIcon, Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import HeaderNav from './nav/header-nav';
import style from './app-header.module.scss';
import burger from '../../images/burger.png';

const AppHeader = () => {
     return (
          <header className={style.header}>
               <div className={style.wrap}>
                    <HeaderNav />

                    <div className={style.logo}>
                         <Logo />
                    </div>

                    <a href='/' className={style.profile}>
                         <ProfileIcon type={'secondary'} />
                         <div
                              className={`
                                             ${'text_color_inactive'} 
                                             text text_type_main-default
                                        `}>
                              Личный кабинет
                         </div>
                    </a>
               </div>

               <div className={style.mobile}>
                    <div className={style.burger}>
                         <img src={smallLogo} alt='mobileBurger' />
                    </div>
                    <div className={style.burger}>
                         <img src={burger} alt='burger' />
                    </div>
               </div>
          </header>
     );
};

export default AppHeader;
