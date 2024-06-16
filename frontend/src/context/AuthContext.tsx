import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react';

interface AuthContextProps {
    signIn: boolean;
    setSignIn: Dispatch<SetStateAction<boolean>>;
}

const AuthContext = createContext({} as AuthContextProps);


export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [signIn, setSignIn] = useState<boolean>(false);

    return (
        <AuthContext.Provider value={{ signIn, setSignIn }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

