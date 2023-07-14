import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './header-nav.module.scss';

const HeaderNav = () => {
     return (
          <nav className={style.header_list}>
               <a href='/' className={style.link}>
                    <BurgerIcon type={'primary'} />
                    <div
                         className={`
                                   ${'text_color_active'} 
                                   text text_type_main-default
                              `}>
                         Конструктор
                    </div>
               </a>

               <a href='/' className={style.link}>
                    <BurgerIcon type={'secondary'} />
                    <div
                         className={`
                                   ${'text_color_inactive'} 
                                   text text_type_main-default
                              `}>
                         Лента заказов
                    </div>
               </a>
          </nav>
     );
};

export default HeaderNav;
