import {
     ArrowUpIcon,
     BurgerIcon,
     CloseIcon,
     ListIcon,
     ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink, useLocation } from 'react-router-dom';
import style from './burger.module.scss';
import { clx } from '../../utils/set-active-links';
import { FC } from 'react';
import { useAppDispatch } from '../../utils/hooks/redux-hook';
import { logout } from '../../services/reducers/auth/reducer';
import {
     Accordion,
     AccordionItem,
     AccordionItemButton,
     AccordionItemHeading,
     AccordionItemPanel,
} from 'react-accessible-accordion';

interface IBurger {
     isActive: boolean;
     setActive: (a: boolean) => void;
}

const Burger: FC<IBurger> = ({ isActive, setActive }) => {
     const { pathname } = useLocation();
     const dispatch = useAppDispatch();
     const exitProfile = () => {
          dispatch(logout()).then((data) => {
               (data.payload as { success: boolean }).success && setActive(false);
          });
     };
     if (!isActive) return null;
     return (
          <div className={style.burger}>
               <div className={style.head}>
                    <h2 className='text text_type_main-large'>Меню</h2>
                    <CloseIcon type='primary' onClick={() => setActive(false)} />
               </div>
               <div>
                    <Accordion className={style.accordion} allowZeroExpanded preExpanded={['accordionItem1']}>
                         <AccordionItem uuid={'accordionItem1'}>
                              <AccordionItemHeading>
                                   <AccordionItemButton className={style.profile}>
                                        <div
                                             className={clx({
                                                  [style.profile_text]: true,
                                                  [style.activeLink]:
                                                       pathname === '/profile/' || pathname === '/profile/orders',
                                             })}>
                                             <ProfileIcon type={'secondary'} />
                                             <div className={'text_color_inactive text text_type_main-default'}>
                                                  Личный кабинет
                                             </div>
                                        </div>
                                        <ArrowUpIcon
                                             type={
                                                  pathname === '/profile/' || pathname === '/profile/orders'
                                                       ? 'primary'
                                                       : 'secondary'
                                             }
                                        />
                                   </AccordionItemButton>
                              </AccordionItemHeading>
                              <AccordionItemPanel>
                                   <NavLink
                                        onClick={() => setActive(false)}
                                        to='/profile/'
                                        className={({ isActive }) =>
                                             clx({ [style.link]: true, [style.activeLink]: isActive })
                                        }>
                                        <div className={'text_color_inactive text text_type_main-default'}>Профиль</div>
                                   </NavLink>
                                   <NavLink
                                        onClick={() => setActive(false)}
                                        to='/profile/orders'
                                        className={({ isActive }) =>
                                             clx({ [style.link]: true, [style.activeLink]: isActive })
                                        }>
                                        <div className={'text_color_inactive text text_type_main-default'}>
                                             История заказов
                                        </div>
                                   </NavLink>
                                   <button
                                        className={`text_color_inactive text text_type_main-default ${style.exit_btn}`}
                                        onClick={exitProfile}>
                                        Выход
                                   </button>
                              </AccordionItemPanel>
                         </AccordionItem>
                    </Accordion>

                    <NavLink
                         onClick={() => setActive(false)}
                         to='/'
                         className={({ isActive }) => clx({ [style.link]: true, [style.activeLink]: isActive })}>
                         <BurgerIcon type={'secondary'} />
                         <div className={'text_color_inactive text text_type_main-default'}>Конструктор</div>
                    </NavLink>

                    <NavLink
                         onClick={() => setActive(false)}
                         to='/feed'
                         className={({ isActive }) => clx({ [style.link]: true, [style.activeLink]: isActive })}>
                         <ListIcon type={'secondary'} />
                         <div className='text_color_inactive text text_type_main-default'>Лента заказов</div>
                    </NavLink>
               </div>
          </div>
     );
};

export default Burger;
