import { useRef, useState } from "react"
import { AiOutlineEye } from "react-icons/ai"

// Fazer o fullname ter a primeira letra de cada palavra maiuscula
// Fazer confirmar senha (superRefine)
const SignUpForm = () => {

    const [viewPassword, setViewPassword] = useState(false)
    const ref = useRef<HTMLFormElement | null>(null)
    return (
        <form className="w-full flex" ref={ref}>
            <div className="w-full flex flex-col gap-4">
                <div className='w-full flex flex-col'>
                    <label className='2xl:text-lg'>Nome completo</label>
                    <input required name="fullname" type="text" placeholder="Insira seu nome completo" className='bg-dark30 text-dark50 px-3 py-1.5 rounded-md border-solid border border-dark40 focus:border-primary-900 outline-none 2xl:py-2' />
                </div>
                <div className='w-full flex flex-col'>
                    <label className='2xl:text-lg'>Email</label>
                    <input required name="email" type="email" placeholder="Insira seu email" className='bg-dark30 text-dark50 px-3 py-1.5 rounded-md border-solid border border-dark40 focus:border-primary-900 outline-none 2xl:py-2' />
                </div>
                <div className='w-full flex flex-col'>
                    <label className='2xl:text-lg'>Senha</label>
                    <div className='w-full flex items-center justify-between text-center'>
                        <input required name='password' type={`${!viewPassword ? "password" : "text"}`} placeholder='Insira sua senha' className='peer bg-dark30 text-dark50 pl-3 py-1.5 w-11/12 rounded-l-md border-solid border border-dark40 focus:border-primary-900 border-r-0 outline-none 2xl:py-2' />
                        <button type='button' className='bg-dark30 h-full w-1/12 rounded-r-md border-l-0 border-solid border border-dark40 flex justify-center items-center peer-focus:border-primary-900 cursor-default' onClick={() => setViewPassword(!viewPassword)}><AiOutlineEye className='text-slate-500 cursor-pointer hover:text-primary-300 transition-all' /></button>
                    </div>
                </div>
                <div className="w-full pt-6">
                    <button type="submit" className="w-full bg-primary-500 py-2 rounded-md text-white hover:bg-primary-600 transition-all outline-none 2xl:text-lg">Cadastrar</button>
                </div>
            </div>
        </form>
    )
}

export default SignUpForm