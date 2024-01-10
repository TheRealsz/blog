import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react';

interface IUser {
    id: string;
    fullname: string;
    email: string;
}

interface AuthContextProps {
    user: IUser | null;
    setUser: Dispatch<SetStateAction<IUser | null>>;
    signIn: boolean;
    setSignIn: Dispatch<SetStateAction<boolean>>;
}

const AuthContext = createContext({} as AuthContextProps);


export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<IUser | null>(null);
    const [signIn, setSignIn] = useState<boolean>(false);
    return (
        <AuthContext.Provider value={{ user, setUser, signIn, setSignIn }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

