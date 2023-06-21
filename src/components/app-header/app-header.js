
import smallLogo from '../../images/small-logo.svg'
import { BurgerIcon, ProfileIcon, Logo } from "@ya.praktikum/react-developer-burger-ui-components"

import style from './app-header.module.css';
import burger from '../../images/burger.png';

const AppHeader = ({ activePage }) => {
     const linkConstructorImg = activePage === 'constructorPage' ? 'primary' : 'secondary';
     const linkBuyItems = activePage === 'buyItemsPage' ? 'primary' : 'secondary';
     const linkProfileImg = activePage === 'profilePage' ? 'primary' : 'secondary';

     const linkConstructorText = activePage === 'constructorPage' ? 'text text_type_main-default text_color_active' : 'text text_type_main-default text_color_inactive';
     const linkBuyItemsText = activePage === 'buyItemsPage' ? "text text_type_main-default text_color_active" : 'text text_type_main-default text_color_inactive';
     const linkProfileText = activePage === 'profilePage' ? "text text_type_main-default text_color_active" : 'text text_type_main-default text_color_inactive';

     return (
          <header className={style.header}>
               <div className={style.wrap}>
                    <nav>
                         <ul className={style.headerList}>
                              <li className={style.headerLi}>
                                   <a href="#" className={style.headerLi}>
                                        <BurgerIcon type={linkConstructorImg} />
                                        <div className={linkConstructorText}>Конструктор</div>
                                   </a>   
                              </li>
                              <li className={style.headerLi}>
                                   <a href="#" className={style.headerLi}>
                                        <BurgerIcon type={linkBuyItems} />
                                        <div className={linkBuyItemsText}>Лента заказов</div>
                                   </a>
                              </li>
                         </ul>
                    </nav>
                    <div className={style.logo}><Logo /></div> 
                    <div className={style.profile}> 
                         <a href="#" className={style.profile}>
                              <ProfileIcon type={linkProfileImg} /> 
                              <div className={linkProfileText}>Личный кабинет</div>
                         </a>
                    </div>
               </div>
               
               <div className={style.mobile}>
                    <div className={style.burger}><img src={smallLogo} alt="mobileBurger" /></div>
                    <div className={style.burger}><img src={burger} alt="burger" /></div>
               </div>
          </header>
     )
}

export default AppHeader