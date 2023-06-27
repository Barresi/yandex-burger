import PropTypes from 'prop-types';

import smallLogo from '../../images/small-logo.svg'
import { BurgerIcon, ProfileIcon, Logo } from "@ya.praktikum/react-developer-burger-ui-components"

import SkeletonLink from './skeleton-link/skeleton-link';

import style from './app-header.module.css';
import burger from '../../images/burger.png';

const AppHeader = ({ activePage, isLoading }) => {
     const activePageConstructor = activePage === 'constructorPage';
     const activePageBuyItems = activePage === 'buyItemsPage';
     const activePageProfile = activePage === 'profilePage';

     return (
          <header className={style.header}>
               <div className={style.wrap}>
                    <nav>
                         <ul className={style.header_list}>
                              {isLoading ? null : 
                              <>
                                   <li className={style.header_li}>
                                        <button className={style.header_li}>
                                             <BurgerIcon type={activePageConstructor? 'primary' : 'secondary'} />
                                             <div className={`
                                                  ${activePageConstructor? 'text_color_active' : 'text_color_inactive'} 
                                                  text text_type_main-default
                                                  `}>Конструктор</div>
                                        </button>   
                                   </li>
                                   <li className={style.header_li}>
                                        <button className={style.header_li}>
                                             <BurgerIcon type={activePageBuyItems? 'primary' : 'secondary'} />
                                             <div className={`
                                                  ${activePageBuyItems? 'text_color_active' : 'text_color_inactive'} 
                                                  text text_type_main-default
                                                  `}>Лента заказов</div>
                                        </button>
                                   </li>
                              </>}
                         </ul>
                    </nav>
                    <div className={style.logo}>{isLoading ? null : <Logo />}</div> 
                    {isLoading ? <SkeletonLink cards={1}/> : 
                    <div className={style.profile}> 
                         <button className={style.profile}>
                              <ProfileIcon type={activePageProfile? 'primary' : 'secondary'} /> 
                              <div className={`
                                   ${activePageProfile? 'text_color_active' : 'text_color_inactive'} 
                                   text text_type_main-default
                                   `}>Личный кабинет</div>
                         </button>
                    </div>}
               </div>
               
               <div className={style.mobile}>
                    <div className={style.burger}><img src={smallLogo} alt="mobileBurger" /></div>
                    <div className={style.burger}><img src={burger} alt="burger" /></div>
               </div>
          </header>
     )
}

AppHeader.propTypes = {
     activePage: PropTypes.string.isRequired
}

export default AppHeader