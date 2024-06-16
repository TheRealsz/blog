import api from '../useApi';
import SignInFormType from '../../schema/SignInForm.schema';
import SignUpFormType from '../../schema/SignUpForm.schema';

const userRequest = {
    auth: async (credentials: SignInFormType) => api.post('user/login', credentials),
    create: async (credentials: SignUpFormType) => api.post('user/signup', credentials),
    logout: async (id: string) => api.post(`user/logout/${id}`),
    editProfile: async (id: string, fullname: string) => api.put(`user/edit/${id}`, { newFullname : fullname}),
    changePassword: async (id: string, newPassword: string) => api.put(`user/edit/password/${id}`, { newPassword: newPassword}),
    deleteAccount: async (id: string) => api.delete(`user/delete/${id}`)
}

export default userRequest;