import api from '../useApi';
import SignInFormProps from '../../schema/SignInForm.schema'; 
import SignUpFormProps from '../../schema/SignUpForm.schema';

const userRequest = {
    auth: async (credentials : SignInFormProps) => api.post('user/login', credentials),
    create: async (credentials : SignUpFormProps) => api.post('user/signup', credentials),
}

export default userRequest;