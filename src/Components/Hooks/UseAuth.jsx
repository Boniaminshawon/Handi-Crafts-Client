import { useContext } from "react";
import { AuthContext } from "../../Porviders/AuthProvider";


const UseAuth = () => {
    const allContext = useContext(AuthContext);
    return (
        allContext
    );
};

export default UseAuth;