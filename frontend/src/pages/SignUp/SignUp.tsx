import { useRef, useState } from "react"
import TheRealIcon from "../../components/svg/TheRealIcon"
import { AiOutlineEye } from "react-icons/ai"

const SignUp = () => {
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
                                <span className="text-xl font-semibold 2xl:text-2xl">Cadastre-se no TheReal!</span>
                                <p className="font-normal text-dark50 2xl:text-lg">Preencha as informações a seguir para ficar por dentro de tudo sobre o mundo da programação!</p>
                            </div>
                        </div>
                        <form className="w-full flex" ref={ref}>
                            <div className="w-full flex flex-col gap-4">
                                <div className='w-full flex flex-col'>
                                    <label className='2xl:text-lg'>Nome completo</label>
                                    <input required name="fullname" type="text" placeholder="Insira seu nome completo" className='text-black px-3 py-1.5 rounded-md border-gray-300 border-solid border focus:border-primary-300 outline-none 2xl:py-2' />
                                </div>
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
                                </div>
                                <div className="w-full pt-6">
                                    <button type="submit" className="w-full bg-primary-500 py-2 rounded-md text-white hover:bg-primary-600 transition-all outline-none 2xl:text-lg">Cadastrar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <aside className="hidden w-1/2 h-full bg-gradient-to-tl from-primary-600 to-primary-400 lg:flex justify-center items-center" />
            </div>
        </div>
    )
}

export default SignUp