import { IUser } from "@/types/user";
import { getCurrentUser, setCurrentUser } from "@/utils/userStorage";
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react";

type UserContextType = {
    user: IUser | null;
    setUser: Dispatch<SetStateAction<IUser | null>>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const userOnLocalStorage = getCurrentUser()
    const [user, setUser] = useState<IUser | null>(userOnLocalStorage)

    useEffect(() => {
        setCurrentUser(user)
    }, [user])

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext)
    if (!context) {
        throw new Error("useUser deve ser usado dentro de um UserProvider")
    }
    return context
}
