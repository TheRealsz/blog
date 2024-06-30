import { ArrowLeft } from "lucide-react"
import TheRealIcon from "../../components/svg/TheRealIcon"
import SignUpForm from "./components/SignUpForm/SignUpForm"
import { useNavigate } from "react-router-dom"

const SignUp = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className="w-screen h-screen relative">
                <div className="fixed rounded-full group hover:bg-main-400/20 p-2 top-4 left-2 hover: md:left-10 md:top-8 lg:left-6 transition-all">
                    <ArrowLeft size={30} onClick={() => navigate("/signin")} className="cursor-pointer group-hover:text-main-400 transition-all" />
                </div>
                <div className="w-full h-full flex justify-center">
                    <div className="w-5/6 h-full flex flex-col justify-center items-center sm:w-7/12 md:w-5/12 lg:w-1/2 xl:items-start xl:pl-20 2xl:pl-28">
                        <div className="w-full flex flex-col gap-7 lg:w-8/12 xl:w-7/12">
                            <div className="w-full flex flex-col items-center gap-4 sm:items-start">
                                <div className='w-full flex justify-center xl:justify-start'>
                                    <TheRealIcon color="#FFF" classname="w-52 2xl:w-60" />
                                </div>
                                <div className="flex text-center flex-col gap-1 xl:text-left">
                                    <span className="text-xl font-semibold 2xl:text-2xl">Cadastre-se no TheReal!</span>
                                    <p className="font-normal text-dark-50 2xl:text-lg">Preencha as informações a seguir para ficar por dentro de tudo sobre o mundo da programação!</p>
                                </div>
                            </div>
                            <SignUpForm />
                        </div>
                    </div>
                    <aside className="hidden w-1/2 h-full bg-gradient-to-tl from-main-600 to-main-400 lg:flex justify-center items-center" />
                </div>
            </div>
        </>
    )
}

export default SignUp