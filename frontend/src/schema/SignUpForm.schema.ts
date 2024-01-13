import { z } from "zod"

export const signUpFormSchema = z.object({
    fullname: z
        .string()
        .min(2, 'Nome deve conter no mínimo 2 caracteres')
        .max(50, 'Nome deve conter no máximo 50 caracteres')
        .regex(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/, 'Nome deve conter apenas letras e espaços')
        .refine((value) => {return value.trim().split(/\s+/).length > 1}, 'Nome deve conter pelo menos 2 palavras')
        .transform((value) => {return value.trim().split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')}),
    email: z
        .string()
        .email("Formato de e-mail inválido"),
    password: z
        .string()
        .min(10, 'Senha deve conter no mínimo 10 caracteres')
        .max(50, 'Senha deve conter no máximo 50 caracteres')
}).required()

type SignUpFormType = z.infer<typeof signUpFormSchema>

export default SignUpFormType