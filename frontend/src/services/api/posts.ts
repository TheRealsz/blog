import api from '../useApi';

const postRequest = {
    getAllPost: async () => api.get('post/getAll'),
}

export default postRequest;