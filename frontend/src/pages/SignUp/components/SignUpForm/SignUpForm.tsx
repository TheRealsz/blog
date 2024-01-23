import { useState } from "react"
import { useForm } from "react-hook-form"
import { AiOutlineEye } from "react-icons/ai"
import SignUpFormType, { signUpFormSchema } from "../../../../schema/SignUpForm.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { catchError } from "../../../../utils/catchError"
import toast, { Toaster } from "react-hot-toast"
import userRequest from "../../../../services/api/users"
import { useNavigate } from "react-router-dom"

const SignUpForm = () => {
    const navigate = useNavigate()
    const [viewPassword, setViewPassword] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<SignUpFormType>({
        resolver: zodResolver(signUpFormSchema)
    })

    const handleSignIn = async (credentials: SignUpFormType) => {
        try {
            const { data } = await userRequest.create(credentials)
            toast.success(data.message, {
                style: {
                    background: '#333',
                    color: '#fff',
                },
            })
            setTimeout(() => {
                navigate('/signin')
            }, 2000)
        } catch (e) {
            toast.error(catchError(e) || 'Erro ao cadastrar novo usuario', {
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
                        <label className='2xl:text-lg'>Nome completo</label>
                        <input {...register("fullname")} type="text" placeholder="Insira seu nome completo" className='bg-dark40 text-dark50 px-3 py-1.5 rounded-md border-solid border border-dark40 focus:border-primary-900 outline-none 2xl:py-2' />
                        {errors.fullname && <span className='text-red-500 text-sm'>{errors.fullname.message}</span>}
                    </div>
                    <div className='w-full flex flex-col'>
                        <label className='2xl:text-lg'>Email</label>
                        <input {...register("email")} type="email" placeholder="Insira seu email" className='bg-dark40 text-dark50 px-3 py-1.5 rounded-md border-solid border border-dark40 focus:border-primary-900 outline-none 2xl:py-2' />
                        {errors.email && <span className='text-red-500 text-sm'>{errors.email.message}</span>}
                    </div>
                    <div className='w-full flex flex-col'>
                        <label className='2xl:text-lg'>Senha</label>
                        <div className='w-full flex items-center justify-between text-center'>
                            <input {...register("password")} type={`${!viewPassword ? "password" : "text"}`} placeholder='Insira uma senha' className='peer bg-dark40 text-dark50 pl-3 py-1.5 w-11/12 rounded-l-md border-solid border border-dark40 focus:border-primary-900 border-r-0 outline-none 2xl:py-2' />
                            <button type='button' className='bg-dark40 h-full w-1/12 rounded-r-md border-l-0 border-solid border border-dark40 flex justify-center items-center peer-focus:border-primary-900 outline-none cursor-default' onClick={() => setViewPassword(!viewPassword)}><AiOutlineEye className={`cursor-pointer hover:text-primary-300 transition-all ${viewPassword ? "text-primary-500" : "text-slate-500"}`} /></button>
                        </div>
                        {errors.password && <span className='text-red-500 text-sm'>{errors.password.message}</span>}
                    </div>
                    <div className="w-full pt-6">
                        <button type="submit" className="w-full bg-primary-500 py-2 rounded-md text-white hover:bg-primary-600 transition-all outline-none 2xl:text-lg">Cadastrar</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default SignUpForm