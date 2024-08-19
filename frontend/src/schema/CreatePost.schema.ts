import { z } from "zod"

export const createPostSchema = z.object({
    title: z
        .string()
        .min(3, "O título do seu post deve conter no minimo 3 caracteres")
        .max(80, "O título do seu post deve contar no maximo 40 caracteres"),
    description: z
        .string()
        .min(20, 'A descrição do seu post deve conter no minimo 20 caracteres')
}).required()

type CreatePostType = z.infer<typeof createPostSchema>

export default CreatePostType