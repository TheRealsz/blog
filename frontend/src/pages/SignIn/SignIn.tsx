import { useRef, useState } from "react"
import { AiOutlineEye } from 'react-icons/ai'
import TheRealIcon from "../../components/svg/TheRealIcon"


const SignIn = () => {
    const [viewPassword, setViewPassword] = useState(false)
    const ref = useRef<HTMLFormElement | null>(null)

    return (
        <div className="w-screen h-screen">
            <div className="w-full h-full flex justify-center">
                <div className="w-5/6 h-full flex flex-col justify-center items-center sm:w-7/12 md:w-5/12 lg:w-1/2 xl:items-start xl:pl-20 2xl:pl-28">
                    <div className="w-full flex flex-col gap-7 lg:w-8/12 xl:w-7/12">
                        <div className="w-full flex flex-col items-center gap-4 sm:items-start">
                            <div className='w-full flex justify-center xl:justify-start'>
                                <TheRealIcon color="#FFF" classname="w-52 2xl:w-60" />
                            </div>
                            <div className="flex text-center flex-col gap-1 xl:text-left">
                                <span className="text-xl font-semibold 2xl:text-2xl">Bem vindo ao TheReal!</span>
                                <p className="font-normal text-dark50 2xl:text-lg">Faça o login ou cadastre-se para saber de tudo sobre o mundo da tecnologia e da programação em nosso site!</p>
                            </div>
                        </div>
                        <form className="w-full flex" ref={ref}>
                            <div className="w-full flex flex-col gap-4">
                                <div className='w-full flex flex-col'>
                                    <label className='2xl:text-lg'>Email</label>
                                    <input required name="email" type="email" placeholder="Insira seu email" className='text-black px-3 py-1.5 rounded-md border-gray-300 border-solid border focus:border-primary-300 outline-none 2xl:py-2' />
                                </div>
                                <div className='w-full flex flex-col'>
                                    <label className='2xl:text-lg'>Senha</label>
                                    <div className='w-full flex items-center justify-between text-center'>
                                        <input required name='password' type={`${viewPassword == false ? "password" : "text"}`} placeholder='Insira sua senha' className='peer text-black pl-3 py-1.5 w-11/12 rounded-l-md border-gray-300 border-solid border border-r-0 focus:border-primary-300 outline-none 2xl:py-2' />
                                        <button type='button' className='bg-white h-full w-1/12 rounded-r-md border-l-0 border border-solid flex justify-center items-center border-gray-300 peer-focus:border-primary-300 cursor-default' onClick={() => setViewPassword(!viewPassword)}><AiOutlineEye className='text-slate-500 cursor-pointer hover:text-primary-300 transition-all' /></button>
                                    </div>
                                    <div className="pt-1 text-xs flex w-full justify-end items-center font-light">
                                        <a className="text-primary-500">Esqueceu a senha?</a>
                                    </div>
                                </div>
                                <div className="w-full pt-6">
                                    <button type="submit" className="w-full bg-primary-500 py-2 rounded-md text-white hover:bg-primary-600 transition-all outline-none 2xl:text-lg">Entrar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="absolute bottom-5 2xl:static 2xl:pt-7">
                        <div className="w-full flex justify-center items-center gap-1 2xl:text-lg">
                            <span className="text-dark50">Não tem uma conta?</span>
                            <a className="text-primary-500 cursor-pointer">Cadastre-se</a>
                        </div>
                    </div>
                </div>
                <aside className="hidden w-1/2 h-full bg-gradient-to-tl from-primary-600 to-primary-400 lg:flex justify-center items-center" />
            </div>
        </div>
    )
}

export default SignIn