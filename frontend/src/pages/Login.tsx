import { useRef, useState } from 'react'
import { AiOutlineEye } from 'react-icons/ai'

const Login = () => {
    const [viewPassword, setViewPassword] = useState(false)
    const ref = useRef<HTMLFormElement | null>(null)

    return (
        <div className="w-screen h-screen">
            <div className="w-full h-full flex justify-center">
                <div className="w-5/6 h-full flex flex-col justify-center items-center sm:w-7/12 md:w-5/12 lg:w-1/2 xl:items-start xl:pl-20 2xl:pl-28">
                    <div className="w-full flex flex-col gap-9 lg:w-8/12 xl:w-7/12">
                        <div className="w-full flex flex-col items-center gap-4 sm:items-start">
                            <div className='w-full flex justify-center xl:justify-start'>
                                <svg width="515.3199920654297" height="71.45546368517688" viewBox="0 0 350 48.53181067082778" className="w-52 2xl:w-60">
                                    <defs id="SvgjsDefs2009"></defs>
                                    <g id="SvgjsG2010" transform="matrix(3.2441049830932482,0,0,3.2441049830932482,-0.908349399133384,-16.22052182164664)" fill="#000000">
                                        <path d="M3.04 5 q0.3 0 0.51 0.21 t0.21 0.51 l0 1.46 q0 0.3 -0.21 0.51 t-0.51 0.21 l-2.06 0 q-0.28 0 -0.49 -0.21 t-0.21 -0.51 l0 -1.46 q0 -0.3 0.21 -0.51 t0.49 -0.21 l2.06 0 z M11.98 5 q0.28 0 0.49 0.21 t0.21 0.51 l0 1.46 q0 0.3 -0.21 0.51 t-0.49 0.21 l-4.02 0 l0 11.36 q0 0.28 -0.21 0.49 t-0.49 0.21 l-1.54 0 q-0.3 0 -0.51 -0.21 t-0.21 -0.49 l0 -13.54 q0 -0.3 0.21 -0.51 t0.51 -0.21 l6.26 0 z M17.048000000000002 10.12 q-0.28 0 -0.49 -0.21 t-0.21 -0.49 l0 -3.72 q0 -0.28 0.21 -0.49 t0.49 -0.21 l1.52 0 q0.3 0 0.5 0.21 t0.2 0.49 l0 3.72 q0 0.28 -0.2 0.49 t-0.5 0.21 l-1.52 0 z M27.908 5 q0.28 0 0.49 0.21 t0.21 0.49 l0 13.44 q0 0.28 -0.21 0.49 t-0.49 0.21 l-1.52 0 q-0.3 0 -0.5 -0.21 t-0.2 -0.49 l0 -5.28 l-6.42 0 l0 5.28 q0 0.28 -0.2 0.49 t-0.5 0.21 l-1.52 0 q-0.28 0 -0.49 -0.21 t-0.21 -0.49 l0 -7.48 q0 -0.28 0.21 -0.49 t0.49 -0.21 l8.64 0 l0 -5.26 q0 -0.28 0.2 -0.49 t0.5 -0.21 l1.52 0 z M44.196 16.96 q0.3 0 0.5 0.21 t0.2 0.51 l0 1.46 q0 0.28 -0.2 0.49 t-0.5 0.21 l-9.88 0 q-0.28 0 -0.49 -0.21 t-0.21 -0.49 l0 -1.46 q0 -0.3 0.21 -0.51 t0.49 -0.21 l9.88 0 z M34.316 13.86 q-0.28 0 -0.49 -0.21 t-0.21 -0.49 l0 -1.5 q0 -0.28 0.21 -0.49 t0.49 -0.21 l8.98 0 q0.3 0 0.51 0.21 t0.21 0.49 l0 1.5 q0 0.28 -0.21 0.49 t-0.51 0.21 l-8.98 0 z M44.196 5 q0.3 0 0.5 0.21 t0.2 0.49 l0 1.46 q0 0.3 -0.2 0.51 t-0.5 0.21 l-9.88 0 q-0.28 0 -0.49 -0.21 t-0.21 -0.51 l0 -1.46 q0 -0.28 0.21 -0.49 t0.49 -0.21 l9.88 0 z M58.56400000000001 14.1 l3.02 4.62 q0.22 0.36 0.02 0.72 q-0.08 0.16 -0.25 0.26 t-0.35 0.1 l-1.82 0 q-0.18 0 -0.34 -0.09 t-0.24 -0.23 l-3.04 -4.82 l-3.56 0 l0 4.44 q0 0.28 -0.21 0.49 t-0.49 0.21 l-1.52 0 q-0.28 0 -0.49 -0.21 t-0.21 -0.49 l0 -6.58 q0 -0.28 0.21 -0.49 t0.49 -0.21 l6.16 0 q1.76 0 2.34 -1 q0.2 -0.32 0.2 -0.92 q0 -0.94 -0.62 -1.48 q-0.64 -0.58 -1.84 -0.58 l-6.24 0 q-0.28 0 -0.49 -0.21 t-0.21 -0.49 l0 -1.44 q0 -0.28 0.21 -0.49 t0.49 -0.21 l6.42 0 q2.34 0 3.74 1.32 q1.46 1.32 1.46 3.58 q0 1.46 -0.64 2.49 t-1.86 1.57 z M76.352 16.96 q0.3 0 0.5 0.21 t0.2 0.51 l0 1.46 q0 0.28 -0.2 0.49 t-0.5 0.21 l-9.88 0 q-0.28 0 -0.49 -0.21 t-0.21 -0.49 l0 -1.46 q0 -0.3 0.21 -0.51 t0.49 -0.21 l9.88 0 z M66.472 13.86 q-0.28 0 -0.49 -0.21 t-0.21 -0.49 l0 -1.5 q0 -0.28 0.21 -0.49 t0.49 -0.21 l8.98 0 q0.3 0 0.51 0.21 t0.21 0.49 l0 1.5 q0 0.28 -0.21 0.49 t-0.51 0.21 l-8.98 0 z M76.352 5 q0.3 0 0.5 0.21 t0.2 0.49 l0 1.46 q0 0.3 -0.2 0.51 t-0.5 0.21 l-9.88 0 q-0.28 0 -0.49 -0.21 t-0.21 -0.51 l0 -1.46 q0 -0.28 0.21 -0.49 t0.49 -0.21 l9.88 0 z M94.4 18.86 q0.14 0.32 -0.07 0.65 t-0.57 0.33 l-13.32 0 q-0.18 0 -0.34 -0.09 t-0.24 -0.23 q-0.22 -0.32 -0.06 -0.66 l0.62 -1.46 q0.08 -0.2 0.26 -0.32 t0.38 -0.12 l9.32 0 l-3.28 -7.84 l-2.68 6.4 q-0.08 0.2 -0.25 0.31 t-0.39 0.11 l-1.68 0 q-0.38 0 -0.6 -0.32 q-0.08 -0.14 -0.1 -0.32 t0.04 -0.34 l4.06 -9.52 q0.08 -0.2 0.25 -0.32 t0.39 -0.12 l1.92 0 q0.22 0 0.39 0.12 t0.25 0.32 z M100.168 5 q0.28 0 0.49 0.21 t0.21 0.49 l0 13.4 q0 0.28 -0.21 0.49 t-0.49 0.21 l-1.52 0 q-0.28 0 -0.49 -0.21 t-0.21 -0.49 l0 -13.4 q0 -0.28 0.21 -0.49 t0.49 -0.21 l1.52 0 z M107.468 16.94 q0.3 0 0.5 0.21 t0.2 0.49 l0 1.46 q0 0.28 -0.2 0.49 t-0.5 0.21 l-4.66 0 q-0.3 0 -0.5 -0.21 t-0.2 -0.49 l0 -1.46 q0 -0.28 0.2 -0.49 t0.5 -0.21 l4.66 0 z"></path>
                                    </g>
                                </svg>
                            </div>
                            <div className="flex text-center flex-col gap-1 xl:text-left">
                                <span className="text-xl font-semibold text-gray-800 2xl:text-2xl">Bem vindo ao TheReal!</span>
                                <p className="text-black/50 font-normal 2xl:text-lg">Faça o login ou cadastre-se para saber de tudo sobre o mundo da tecnologia e da programação em nosos site!</p>
                            </div>
                        </div>
                        <form className="w-full flex" name="SignUpForm" ref={ref}>
                            <div className="w-full flex flex-col gap-4">
                                <div className='w-full flex flex-col'>
                                    <label className='2xl:text-lg'>Email</label>
                                    <input required name="email" type="email" placeholder="Insira seu email" className='px-3 py-1.5 rounded-md border-gray-300 border-solid border focus:border-violet-600 outline-none 2xl:py-2' />
                                </div>
                                <div className='w-full flex flex-col'>
                                    <label className='2xl:text-lg'>Senha</label>
                                    <div className='w-full flex items-center justify-between text-center'>
                                        <input required name='password' type={`${viewPassword == false ? "password" : "text"}`} placeholder='Insira sua senha' className='peer pl-3 py-1.5 w-11/12 rounded-l-md border-gray-300 border-solid border border-r-0 focus:border-violet-600 outline-none 2xl:py-2' />
                                        <button type='button' className='bg-white h-full w-1/12 rounded-r-md border-l-0 border border-solid flex justify-center items-center border-gray-300 peer-focus:border-violet-600 cursor-default' onClick={() => setViewPassword(!viewPassword)}><AiOutlineEye className='text-slate-500 cursor-pointer' /></button>
                                    </div>
                                    <div className="pt-1 text-xs text-slate-800 flex w-full justify-between items-center font-light">
                                        <div className="flex items-center w-8/12">
                                            <input type="checkbox" className="mr-1" />
                                            <label>Mantenha-me conectado</label>
                                        </div>
                                        <a className="text-violet-800 w-4/12">Esqueceu a senha?</a>
                                    </div>
                                </div>
                                <div className="w-full pt-6">
                                    <button type="submit" className="w-full bg-violet-800 py-2 rounded-md text-white hover:bg-violet-600 transition-all outline-none 2xl:text-lg">Entrar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <aside className="hidden w-1/2 h-full bg-gradient-to-tl from-blue-400 to-violet-800 lg:flex justify-center items-center"></aside>
            </div>
        </div>
    )

}

export default Login