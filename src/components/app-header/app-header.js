import PropTypes from "prop-types";

import smallLogo from "../../images/small-logo.svg";
import {
     ProfileIcon,
     Logo,
} from "@ya.praktikum/react-developer-burger-ui-components";

import HeaderNav from "./nav/header-nav";

import style from "./app-header.module.css";
import burger from "../../images/burger.png";

const AppHeader = ({ activePage }) => {
     const activePageConstructor = activePage === "constructorPage";
     const activePageBuyItems = activePage === "buyItemsPage";
     const activePageProfile = activePage === "profilePage";

     return (
          <header className={style.header}>
               <div className={style.wrap}>
                    <HeaderNav
                         activePageBuyItems={activePageBuyItems}
                         activePageConstructor={activePageConstructor}
                    />

                    <div className={style.logo}>
                         <Logo />
                    </div>

                    <a href='/' className={style.profile}>
                         <ProfileIcon
                              type={activePageProfile ? "primary" : "secondary"}
                         />
                         <div
                              className={`
                                             ${
                                                  activePageProfile
                                                       ? "text_color_active"
                                                       : "text_color_inactive"
                                             } 
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

AppHeader.propTypes = {
     activePage: PropTypes.string.isRequired,
};

export default AppHeader;
