import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

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
import { useAuth } from '../../utils/hooks/useAuth';
import { getCookie } from '../../utils/cookie';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../modal/modal-body/modal';
import IngredientDetails from '../modal/modal-content/modal-ingredient-details/modal-ingredient-details';
import IngredientDetailsPage from '../../pages/ingredient-details/ingredient-details';
import { getDataIngredients } from '../../services/ingredients-data/ingredients-data';

const App = () => {
     const isLoading = useSelector((store) => store.profileInfo.isLoading);

     const dispatch = useDispatch();
     const location = useLocation();
     const navigate = useNavigate();

     const { checkUserAuth } = useAuth();
     const accessToken = getCookie('accessToken');
     const refreshToken = getCookie('refreshToken');
     useEffect(() => {
          checkUserAuth({ accessToken, refreshToken });
     }, [accessToken, refreshToken]);
     useEffect(() => {
          dispatch(getDataIngredients());
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

                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/register' element={<RegisterPage />} />
                    <Route path='/forgot-password' element={<ForgotPasswordPage />} />
                    <Route path='/reset-password' element={<ResetPasswordPage />} />

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
