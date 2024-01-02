import { useState } from "react"
import { useForm } from "react-hook-form"
import { AiOutlineEye } from 'react-icons/ai'
import { zodResolver } from "@hookform/resolvers/zod"
import { catchError } from "../../../../utils/catchError"
import toast, { Toaster } from "react-hot-toast"
import { signInFormSchema } from '../../../../schema/SignInForm.schema'
import SignInFormType from '../../../../schema/SignInForm.schema'
import userRequest from "../../../../services/api/users"

const SignInForm = () => {
    const [viewPassword, setViewPassword] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<SignInFormType>({
        resolver: zodResolver(signInFormSchema)
    })

    const handleSignIn = async (credentials: SignInFormType) => {
        try {
            const { data } = await userRequest.auth(credentials)
            console.log(data)
            toast.success(data.message, {
                style: {
                    background: '#333',
                    color: '#fff',
                },
            })
        } catch (e) {
            toast.error(catchError(e) || 'Erro ao fazer login', {
                style: {
                    background: '#333',
                    color: '#fff',
                },
            })
        }
        reset()
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
                            <button type='button' className='bg-dark40 h-full w-1/12 rounded-r-md border-l-0 border-solid border border-dark40 flex justify-center items-center peer-focus:border-primary-900 outline-none cursor-default' onClick={() => setViewPassword(!viewPassword)}><AiOutlineEye className={`cursor-pointer hover:text-primary-300 transition-all ${viewPassword ? "text-primary-500" : "text-slate-500"}`} /></button>
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