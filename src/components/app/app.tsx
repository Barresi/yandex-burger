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
import { getDataIngredients } from '../../services/ingredients-data/ingredients-data';
import { getUserInfo } from '../../services/auth/auth';
import { useAppDispatch, useAppSelector } from '../../utils/hooks/redux-hook';

const App: FC = () => {
     const isLoading = useAppSelector((store) => store.profileInfo.isLoading);

     const dispatch = useAppDispatch();
     const location = useLocation();
     const navigate = useNavigate();

     useEffect(() => {
          dispatch(getDataIngredients());
          dispatch(getUserInfo());
     }, [dispatch]);

     return (
          <div className={style.app}>
               <AppHeader />

               <Routes location={location.state?.backgroundLocation}>
                    <Route path='/' element={<MainPage />} />
                    <Route path='ingredients/:id' element={<IngredientDetailsPage />} />

                    <Route path='/profile' element={<ProtectedRouteElement element={<ProfilePage />} />}>
                         <Route path='' element={<EditProfileInfo />}></Route>
                         <Route path='orders' element={''}></Route>
                    </Route>

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

               {location.state?.backgroundLocation && (
                    <Routes>
                         <Route
                              path='ingredients/:id'
                              element={
                                   <Modal onClose={() => navigate(-1)} modalType={'Детали ингредиента'}>
                                        <IngredientDetails />
                                   </Modal>
                              }
                         />
                    </Routes>
               )}

               {isLoading && <Loader />}
          </div>
     );
};

export default App;
