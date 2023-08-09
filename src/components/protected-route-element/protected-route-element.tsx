import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../loader/loader';
import { FC, ReactElement } from 'react';
import { useAppSelector } from '../../utils/hooks/redux-hook';

const ProtectedRouteElement: FC<{ element: ReactElement; onlyUnAuth?: boolean }> = ({
     element,
     onlyUnAuth = false,
}) => {
     const { isUserAuth, isAuthChecked } = useAppSelector((store) => store.profileInfo);
     const location = useLocation();
     if (!isAuthChecked) {
          return <Loader />;
     }

     if (!isUserAuth && !onlyUnAuth) {
          return <Navigate to='/login' replace state={{ pathname: location.pathname }} />;
     }
     if (onlyUnAuth && isUserAuth) {
          return <Navigate to={'/'} />;
     }
     return element;
};

export default ProtectedRouteElement;
