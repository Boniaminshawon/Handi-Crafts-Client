import { createContext } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default AuthProvider;