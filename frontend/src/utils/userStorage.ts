import { IUser } from "@/types/user";

type IUserInfo = keyof IUser;

export const setCurrentUser = (user: IUser | null) => {
    localStorage.setItem('user', JSON.stringify(user));
}

export const getCurrentUser = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
}

export const removeCurrentUser = () => {
    localStorage.removeItem('user');
}

export const getUserInfo = (...info : IUserInfo[]) => {
    const user = getCurrentUser();
    if (user === null) return null;
    if (info.length === 0) return user;

    const userInfo = info.map((info) => user[info]);

    return userInfo
}