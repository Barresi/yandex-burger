import { NavLink } from 'react-router-dom';
import { BurgerIcon, ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './header-nav.module.scss';

const HeaderNav = () => {
     return (
          <nav className={style.header_list}>
               <NavLink
                    to='/'
                    className={({ isActive }) => (isActive ? `${style.link} ${style.activeLink}` : style.link)}>
                    <BurgerIcon type={'secondary'} />
                    <div className={'text_color_inactive text text_type_main-default'}>Конструктор</div>
               </NavLink>

               <NavLink
                    to='/buy-items'
                    className={({ isActive }) => (isActive ? `${style.link} ${style.activeLink}` : style.link)}>
                    <ListIcon type={'secondary'} />
                    <div className='text_color_inactive text text_type_main-default'>Лента заказов</div>
               </NavLink>
          </nav>
     );
};

export default HeaderNav;
