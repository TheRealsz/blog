import { useState } from "react"
import { useForm } from "react-hook-form"
import { AiOutlineEye } from 'react-icons/ai'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { catchError } from "../../../../utils/catchError"
import toast, { Toaster } from "react-hot-toast"

// Schema = Representacao de uma estrutura de dados
const SignInFormSchema = z.object({
    email: z
        .string()
        .email("Formato de e-mail inválido"),
    password: z
        .string()
        .min(10, 'Senha deve conter no mínimo 10 caracteres')
        .max(50, 'Senha deve conter no máximo 50 caracteres')
}).required()

type SignInFormProps = z.infer<typeof SignInFormSchema>

const SignInForm = () => {
    const [viewPassword, setViewPassword] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<SignInFormProps>({
        resolver: zodResolver(SignInFormSchema)
    })

    const handleSignIn = async (values: SignInFormProps) => {
        try {
            const res = await axios.post('http://localhost:3000/api/user/login', values)
            console.log(res)
        } catch (e) {
            toast.error(catchError(e) || 'Erro ao fazer login', {
                style: {
                    background: '#333',
                    color: '#fff',
                },
            })
        }
    }

    return (
        <>
            <Toaster />
            <form className="w-full flex" onSubmit={handleSubmit(handleSignIn)}>
                <div className="w-full flex flex-col gap-4">
                    <div className='w-full flex flex-col'>
                        <label htmlFor="email" className='2xl:text-lg'>Email</label>
                        <input {...register('email')} type="email" placeholder="Insira seu email" className='bg-dark40 text-dark50 px-3 py-1.5 rounded-md border-solid border border-dark40 focus:border-primary-900 outline-none 2xl:py-2' />
                        {errors.email && <span className='text-red-500 text-sm'>{errors.email.message}</span>}
                    </div>
                    <div className='w-full flex flex-col'>
                        <label htmlFor="password" className='2xl:text-lg'>Senha</label>
                        <div className='w-full flex items-center justify-between text-center'>
                            <input {...register('password')} type={`${!viewPassword ? "password" : "text"}`} placeholder='Insira sua senha' className='peer bg-dark40 text-dark50 pl-3 py-1.5 w-11/12 rounded-l-md border-solid border border-dark40 focus:border-primary-900 border-r-0 outline-none 2xl:py-2' />
                            <button type='button' className='bg-dark40 h-full w-1/12 rounded-r-md border-l-0 border-solid border border-dark40 flex justify-center items-center peer-focus:border-primary-900 outline-none cursor-default' onClick={() => setViewPassword(!viewPassword)}><AiOutlineEye className='text-slate-500 cursor-pointer hover:text-primary-300 transition-all' /></button>
                        </div>
                        {errors.password && <span className='text-red-500 text-sm'>{errors.password.message}</span>}
                        <div className="pt-1 text-xs flex w-full justify-end items-center font-light">
                            <a className="text-primary-500">Esqueceu a senha?</a>
                        </div>
                    </div>
                    <div className="w-full pt-6">
                        <button type="submit" className="w-full bg-primary-500 py-2 rounded-md text-white hover:bg-primary-600 transition-all outline-none 2xl:text-lg">Entrar</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default SignInForm