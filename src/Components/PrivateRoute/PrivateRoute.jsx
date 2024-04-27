import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import Loader from "../Loader";




const PrivateRoute = ({ children }) => {

    const { user, loading } = UseAuth();
    const location = useLocation();

    if (loading) {
        return <Loader></Loader>
    }

    if (!user) {
        return <Navigate to={'/login'}
            state={location.pathname || '/'}
        ></Navigate>
    }


    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;