"use client"

import { useState } from "react";
import { TheRealIcon } from "./components/svg/TheRealIcon";
import { AiOutlineEye } from "react-icons/ai";

export default function Login() {

  const [viewPassword, setViewPassword] = useState(false);

  return (
    <div className="w-full h-screen flex">
      <main className="w-full flex flex-col p-3 items-center justify-center gap-5 sm:w-6/12 md:w-5/12 lg">
        <TheRealIcon />
        <div className="flex flex-col justify-center gap-4">
          <div className="text-center flex flex-col gap-1">
            <h1 className="text-xl font-bold">Bem vindo ao TheReal!</h1>
            <p className="text-md text-black/70">Faça o login ou cadastre-se para saber de tudo sobre o mundo da tecnologia e da programação em nosos site</p>
          </div>
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <div className='w-full flex flex-col'>
                <label className='2xl:text-lg'>Email</label>
                <input required name="email" type="email" placeholder="Insira seu email" className='px-3 py-1.5 rounded-md border-black/25 border-solid border focus:border-primary outline-none 2xl:py-2' />
              </div>
              <div className='w-full flex flex-col'>
                <label className='2xl:text-lg'>Senha</label>
                <div className='w-full flex items-center justify-between text-center'>
                  <input required name='password' type={`${viewPassword == false ? "password" : "text"}`} placeholder='Insira sua senha' className='peer pl-3 py-1.5 w-11/12 rounded-l-md border-black/25 border-solid border border-r-0 focus:border-primary outline-none 2xl:py-2' />
                  <button type='button' className='bg-white h-full w-1/12 rounded-r-md border-l-0 border border-solid flex justify-center items-center border-black/25 peer-focus:border-primary cursor-default' onClick={() => setViewPassword(!viewPassword)}><AiOutlineEye className='text-slate-500 cursor-pointer' /></button>
                </div>
                <div className="flex justify-end pt-1">
                  <a className="text-primary text-sm">Esqueceu a senha?</a>
                </div>
              </div>
            </div>
            <div className="w-full">
              <button className="w-full bg-primary text-white py-2.5 rounded font-semibold">Entrar</button>
            </div>
          </form>
        </div>
        <div className='text-black/50 text-center'>
          <p>Não possui conta? <a href='#' className='font-semibold text-primary'>Cadastre-se!</a></p>
        </div>
      </main>
      <div className="hidden bg-gradient-to-r from-primary to-blue_gradient lg:flex lg:w-1/2">

      </div>
    </div>
  )
}
