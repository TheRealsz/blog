interface IUser {
    email: string;
    fullname: string;
    _id: string;
}

type IUserInfo = keyof IUser;

export const setCurrentUser = (user: IUser) => {
    localStorage.setItem('user', JSON.stringify(user));
}

export const getCurrentUser = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
}

export const removeCurrentUser = () => {
    localStorage.removeItem('user');
}

export const getUserInfo = (info : IUserInfo) => {
    const user = getCurrentUser();
    return user ? user[info] : null;
}