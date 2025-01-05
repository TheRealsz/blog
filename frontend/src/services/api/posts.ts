import CreatePostType from '@/schema/CreatePost.schema';
import api from '../useApi';

const postRequest = {
    getAllPost: async () => api.get('post/getAll'),
    createPost: async (userId: string, createPostInformations : CreatePostType) => api.post(`post/create/${userId}`, createPostInformations),
    updatePost: async (userId: string, postId: string, createPostInformations : CreatePostType) => api.put(`post/edit/${postId}/${userId}`, createPostInformations),
}

export default postRequest;