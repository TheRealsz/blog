import { z } from "zod"

export const signInFormSchema = z.object({
    email: z
        .string()
        .email("Formato de e-mail inválido"),
    password: z
        .string()
        .min(10, 'Senha deve conter no mínimo 10 caracteres')
        .max(50, 'Senha deve conter no máximo 50 caracteres')
}).required()

type SignInFormType = z.infer<typeof signInFormSchema>

export default SignInFormType