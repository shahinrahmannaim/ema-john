import {UserContext} from './../../App';
import {Outlet,useLocation, Navigate} from 'react-router-dom';
import {useContext} from 'react';

const PrivateRoute = ( children ) => {
    const [loggedInUser] =  useContext(UserContext);

   
  let location = useLocation();

return loggedInUser.email ? (<Outlet />):(<Navigate to={'/login'} replace state={{from:location}} />)
    
    
        
      
    
};

export default PrivateRoute;