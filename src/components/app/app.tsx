import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { FC, useEffect } from 'react';

import ProfilePage from '../../pages/profile/profile';
import MainPage from '../../pages/main/main';
import AppHeader from '../app-header/app-header';
import LoginPage from '../../pages/login/login';
import RegisterPage from '../../pages/register/register';
import ForgotPasswordPage from '../../pages/forgot-password/forgot-password';
import ResetPasswordPage from '../../pages/reset-password/reset-password';
import EditProfileInfo from '../../pages/profile/pages/edit-profile-info/edit-profile-info';
import PageNotFound from '../../pages/404-not-found/not-found';
import Loader from '../loader/loader';

import ProtectedRouteElement from '../protected-route-element/protected-route-element';
import style from './app.module.scss';
import Modal from '../modal/modal-body/modal';
import IngredientDetails from '../modal/modal-content/modal-ingredient-details/modal-ingredient-details';
import IngredientDetailsPage from '../../pages/ingredient-details/ingredient-details';
import { getDataIngredients } from '../../services/reducers/ingredients-data/reducer';
import { getUserInfo } from '../../services/reducers/auth/reducer';
import { useAppDispatch, useAppSelector } from '../../utils/hooks/redux-hook';
import FeedPage from '../../pages/feed/feed';
import ProfileOrdersPage from '../../pages/profile/pages/profile-orders/profile-orders';
import { wsConnectAllFeed } from '../../services/reducers/all-orders/actions';
import { wsConnectProfileFeed, wsDisconnectProfileFeed } from '../../services/reducers/profile-orders/actions';
import { getCookie } from '../../utils/cookie';
import { WebsocketStatus } from '../../types/reducers/feed-web-socket';

const App: FC = () => {
     const { isLoading, isUserAuth } = useAppSelector((store) => store.profileInfo);
     const statusAllFeed = useAppSelector((store) => store.allFeed.status);
     const statusProfileFeed = useAppSelector((store) => store.profileFeed.status);
     const dispatch = useAppDispatch();
     const location = useLocation();
     const locationState = location.state as { backgroundLocation?: string };
     const navigate = useNavigate();

     useEffect(() => {
          dispatch(getDataIngredients());
          dispatch(getUserInfo());
          dispatch(wsConnectAllFeed('wss://norma.nomoreparties.space/orders/all'));
          isUserAuth
               ? dispatch(
                      wsConnectProfileFeed(
                           `wss://norma.nomoreparties.space/orders?token=${getCookie('accessToken')?.slice(7)}`
                      )
                 )
               : dispatch(wsDisconnectProfileFeed());
     }, [dispatch, isUserAuth]);

     return (
          <div className={style.app}>
               <AppHeader />

               <Routes location={locationState?.backgroundLocation}>
                    <Route path='/' element={<MainPage />} />
                    <Route path='ingredients/:id' element={<IngredientDetailsPage />} />

                    <Route path='/profile' element={<ProtectedRouteElement element={<ProfilePage />} />}>
                         <Route path='' element={<EditProfileInfo />}></Route>
                         <Route path='orders' element={<ProfileOrdersPage />}></Route>
                    </Route>

                    <Route path='/feed' element={<FeedPage />}></Route>

                    <Route
                         path='/login'
                         element={<ProtectedRouteElement element={<LoginPage />} onlyUnAuth={true} />}
                    />
                    <Route
                         path='/register'
                         element={<ProtectedRouteElement element={<RegisterPage />} onlyUnAuth={true} />}
                    />
                    <Route
                         path='/forgot-password'
                         element={<ProtectedRouteElement element={<ForgotPasswordPage />} onlyUnAuth={true} />}
                    />
                    <Route
                         path='/reset-password'
                         element={<ProtectedRouteElement element={<ResetPasswordPage />} onlyUnAuth={true} />}
                    />

                    <Route path='*' element={<PageNotFound />} />
               </Routes>

               {locationState?.backgroundLocation && (
                    <Routes>
                         <Route
                              path='ingredients/:id'
                              element={
                                   <Modal onClose={() => navigate(-1)} modalType={'Детали ингредиента'}>
                                        <IngredientDetails />
                                   </Modal>
                              }
                         />
                         <Route
                              path='feed/:id'
                              element={
                                   <Modal onClose={() => navigate(-1)} modalType={'17412'}>
                                        1
                                   </Modal>
                              }
                         />
                    </Routes>
               )}

               {isLoading ||
               statusAllFeed === WebsocketStatus.CONNECTING ||
               statusProfileFeed === WebsocketStatus.CONNECTING ? (
                    <Loader />
               ) : null}
          </div>
     );
};

export default App;
