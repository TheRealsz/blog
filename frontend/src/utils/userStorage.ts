interface IUser {
    email: string;
    fullname: string;
    _id: string;
}

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