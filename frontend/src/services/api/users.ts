import api from '../useApi';
import SignInFormType from '../../schema/SignInForm.schema'; 
import SignUpFormType from '../../schema/SignUpForm.schema';
import EditProfileFormType from '@/schema/EditProfile.schema';

const userRequest = {
    auth: async (credentials : SignInFormType) => api.post('user/login', credentials),
    create: async (credentials : SignUpFormType) => api.post('user/signup', credentials),
    logout: async (id: string) => api.post(`user/logout/${id}`),
    editProfile: async (id: string, fullname: EditProfileFormType) => api.put(`user/edit/${id}`, fullname),
}

export default userRequest;