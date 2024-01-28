import TheRealIcon from "../../components/svg/TheRealIcon"
import SignInForm from "./components/SignInForm/SignInForm"

const SignIn = () => {
    return (
        <>
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
                                    <p className="font-normal text-dark-50 2xl:text-lg">Faça o login ou cadastre-se para saber de tudo sobre o mundo da tecnologia e da programação em nosso site!</p>
                                </div>
                            </div>
                            <SignInForm />
                        </div>
                        <div className="absolute bottom-5 2xl:static 2xl:pt-7">
                            <div className="w-full flex justify-center items-center gap-1 2xl:text-lg">
                                <span className="text-dark-50">Não tem uma conta?</span>
                                <a className="text-main-500 cursor-pointer" href="/signup">Cadastre-se</a>
                            </div>
                        </div>
                    </div>
                    <aside className="hidden w-1/2 h-full bg-gradient-to-tl from-main-600 to-main-400 lg:flex justify-center items-center" />
                </div>
            </div>
        </>
    )
}

export default SignIn