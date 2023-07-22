import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../loader/loader';

const ProtectedRouteElement = ({ element, onlyUnAuth = false }) => {
     const { isUserAuth, isAuthChecked } = useSelector((store) => store.profileInfo);
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

ProtectedRouteElement.propTypes = {
     element: PropTypes.element.isRequired,
};

export default ProtectedRouteElement;
