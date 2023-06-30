import PropTypes from "prop-types";
import { useRef } from "react";
import useHover from "../../hooks/useHover";

import smallLogo from "../../images/small-logo.svg";
import {
     BurgerIcon,
     ProfileIcon,
     Logo,
} from "@ya.praktikum/react-developer-burger-ui-components";

import SkeletonLink from "./skeleton-link/skeleton-link";

import style from "./app-header.module.css";
import burger from "../../images/burger.png";

const AppHeader = ({ activePage, isLoading }) => {
     const activePageConstructor = activePage === "constructorPage";
     const activePageBuyItems = activePage === "buyItemsPage";
     const activePageProfile = activePage === "profilePage";

     const refConstructor = useRef();
     const isHoveringConstructor = useHover(refConstructor);

     const refBuyItems = useRef();
     const isHoveringBuyItems = useHover(refBuyItems);

     const refProfile = useRef();
     const isHoveringProfile = useHover(refProfile);

     return (
          <header className={style.header}>
               <div className={style.wrap}>
                    <nav className={style.header_list}>
                         {isLoading ? null : (
                              <>
                                   <a
                                        href='/'
                                        className={style.link}
                                        ref={refConstructor}>
                                        <BurgerIcon
                                             type={
                                                  activePageConstructor ||
                                                  isHoveringConstructor
                                                       ? "primary"
                                                       : "secondary"
                                             }
                                        />
                                        <div
                                             className={`
                                                  ${
                                                       activePageConstructor ||
                                                       isHoveringConstructor
                                                            ? "text_color_active"
                                                            : "text_color_inactive"
                                                  } 
                                                  text text_type_main-default
                                             `}>
                                             Конструктор
                                        </div>
                                   </a>

                                   <a
                                        href='/'
                                        className={style.link}
                                        ref={refBuyItems}>
                                        <BurgerIcon
                                             type={
                                                  activePageBuyItems ||
                                                  isHoveringBuyItems
                                                       ? "primary"
                                                       : "secondary"
                                             }
                                        />
                                        <div
                                             className={`
                                                  ${
                                                       activePageBuyItems ||
                                                       isHoveringBuyItems
                                                            ? "text_color_active"
                                                            : "text_color_inactive"
                                                  } 
                                                  text text_type_main-default
                                             `}>
                                             Лента заказов
                                        </div>
                                   </a>
                              </>
                         )}
                    </nav>
                    <div className={style.logo}>
                         {isLoading ? null : <Logo />}
                    </div>
                    {isLoading ? (
                         <SkeletonLink cards={1} />
                    ) : (
                         <a href='/' className={style.profile} ref={refProfile}>
                              <ProfileIcon
                                   type={
                                        activePageProfile || isHoveringProfile
                                             ? "primary"
                                             : "secondary"
                                   }
                              />
                              <div
                                   className={`
                                             ${
                                                  activePageProfile ||
                                                  isHoveringProfile
                                                       ? "text_color_active"
                                                       : "text_color_inactive"
                                             } 
                                             text text_type_main-default
                                        `}>
                                   Личный кабинет
                              </div>
                         </a>
                    )}
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
