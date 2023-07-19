import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRouteElement = ({ element }) => {
     const { isUserLoaded } = useSelector((store) => store.profileInfo);
     const { pathname } = useLocation();
     return isUserLoaded ? element : <Navigate to='/login' replace state={{ pathname: pathname }} />;
};

export default ProtectedRouteElement;
