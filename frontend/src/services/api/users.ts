import api from '../useApi';
import SignInFormProps from '../../schema/SignInForm.schema'; 

const userRequest = {
    auth: async (credentials : SignInFormProps) => api.post('user/login', credentials),
}

export default userRequest;