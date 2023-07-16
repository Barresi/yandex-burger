import { Routes, Route } from 'react-router-dom';

import ProfilePage from '../../pages/profile/profile';
import MainPage from '../../pages/main/main';
import AppHeader from '../app-header/app-header';
import LoginPage from '../../pages/login/login';
import RegisterPage from '../../pages/register/register';
import ForgotPasswordPage from '../../pages/forgot-password/forgot-password';
import ResetPasswordPage from '../../pages/reset-password/reset-password';

import style from './app.module.scss';

const App = () => {
     return (
          <div className={style.app}>
               <AppHeader />

               <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/profile' element={<ProfilePage />} />

                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/register' element={<RegisterPage />} />
                    <Route path='/forgot-password' element={<ForgotPasswordPage />} />
                    <Route path='/reset-password' element={<ResetPasswordPage />} />
               </Routes>
          </div>
     );
};

export default App;
