import { useState } from "react"
import { useForm } from "react-hook-form"
import { AiOutlineEye, AiOutlineLoading3Quarters } from 'react-icons/ai'
import { zodResolver } from "@hookform/resolvers/zod"
import { catchError } from "../../../../utils/catchError"
import { signInFormSchema } from '../../../../schema/SignInForm.schema'
import SignInFormType from '../../../../schema/SignInForm.schema'
import userRequest from "../../../../services/api/users"
import { useAuth } from "../../../../context/AuthContext"
import { setTokenOnStorage } from "../../../../utils/tokenStorage"
import { setCurrentUser } from "../../../../utils/userStorage"
import { useUser } from "@/context/UserContext"

const SignInForm = () => {
    const { setUser } = useUser()
    const [viewPassword, setViewPassword] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<SignInFormType>({
        resolver: zodResolver(signInFormSchema)
    })
    const { setSignIn } = useAuth()
    const [isLoading, setIsLoading] = useState(false)

    const handleSignIn = async (credentials: SignInFormType) => {
        setIsLoading(true)
        try {
            const { data } = await userRequest.auth(credentials)
            setSignIn(true)
            setTokenOnStorage(data.userWithoutPassword.token)
            const user = {
                _id: data.userWithoutPassword._id,
                fullname: data.userWithoutPassword.fullname,
                email: data.userWithoutPassword.email,
            }
            setCurrentUser(user)
            setUser(user)
        } catch (e) {
            catchError(e, "Erro ao fazer login")
        }
        finally {
            setIsLoading(false)
            reset()
        }
    }

    return (
        <>
            <form className="w-full flex" onSubmit={handleSubmit(handleSignIn)}>
                <div className="w-full flex flex-col gap-4">
                    <div className='w-full flex flex-col'>
                        <label htmlFor="email" className='2xl:text-lg'>Email</label>
                        <input {...register('email')} type="email" placeholder="Insira seu email" className='bg-dark-40 text-dark-50 px-3 py-1.5 rounded-md border-solid border border-dark-40 focus:border-main-900 outline-none 2xl:py-2' />
                        {errors.email && <span className='text-red-500 text-sm'>{errors.email.message}</span>}
                    </div>
                    <div className='w-full flex flex-col'>
                        <label htmlFor="password" className='2xl:text-lg'>Senha</label>
                        <div className='w-full flex items-center justify-between text-center'>
                            <input {...register('password')} type={`${!viewPassword ? "password" : "text"}`} placeholder='Insira sua senha' className='peer bg-dark-40 text-dark-50 pl-3 py-1.5 w-11/12 rounded-l-md border-solid border border-dark-40 focus:border-main-900 border-r-0 outline-none 2xl:py-2' />
                            <button type='button' className='bg-dark-40 h-full w-1/12 rounded-r-md border-l-0 border-solid border border-dark-40 flex justify-center items-center peer-focus:border-main-900 outline-none cursor-default' onClick={() => setViewPassword(!viewPassword)}><AiOutlineEye className={`cursor-pointer hover:text-main-300 transition-all ${viewPassword ? "text-main-500" : "text-slate-500"}`} /></button>
                        </div>
                        {errors.password && <span className='text-red-500 text-sm'>{errors.password.message}</span>}
                        <div className="pt-1 text-xs flex w-full justify-end items-center font-light">
                            <a className="text-main-500">Esqueceu a senha?</a>
                        </div>
                    </div>
                    <div className="w-full pt-6">
                        <button disabled={isLoading} type="submit" className="w-full flex font-medium items-center justify-center gap-2 bg-main-500 py-3 rounded-md text-white hover:bg-main-600 transition-all outline-none 2xl:text-lg disabled:opacity-60">
                            {isLoading && <AiOutlineLoading3Quarters className="animate-spin" />}
                            Entrar
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default SignInForm