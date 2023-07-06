import PropTypes from "prop-types";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import style from "./header-nav.module.css";

const HeaderNav = ({ activePageConstructor, activePageBuyItems }) => {
     return (
          <nav className={style.header_list}>
               <a href='/' className={style.link}>
                    <BurgerIcon
                         type={activePageConstructor ? "primary" : "secondary"}
                    />
                    <div
                         className={`
                                   ${
                                        activePageConstructor
                                             ? "text_color_active"
                                             : "text_color_inactive"
                                   } 
                                   text text_type_main-default
                              `}>
                         Конструктор
                    </div>
               </a>

               <a href='/' className={style.link}>
                    <BurgerIcon
                         type={activePageBuyItems ? "primary" : "secondary"}
                    />
                    <div
                         className={`
                                   ${
                                        activePageBuyItems
                                             ? "text_color_active"
                                             : "text_color_inactive"
                                   } 
                                   text text_type_main-default
                              `}>
                         Лента заказов
                    </div>
               </a>
          </nav>
     );
};

HeaderNav.propTypes = {
     activePageConstructor: PropTypes.bool.isRequired,
     activePageBuyItems: PropTypes.bool.isRequired,
};

export default HeaderNav;
