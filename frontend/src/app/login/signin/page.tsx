"use client";

import { useState } from "react";
import { TheRealIcon } from "../../../components/svg/TheRealIcon";
import { AiOutlineEye } from "react-icons/ai";
import { useSession, signIn, signOut } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
const SignIn = () => {
  const [viewPassword, setViewPassword] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { replace } = useRouter();
  async function handleLogin(event: any) {
    event.preventDefault(); // Evita o comportamento padrão do formulário (recarregar a página)

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (result?.error) {
      return;
    }
    replace("/");
  }
  return (
    <div className="w-11/12 flex flex-col items-center gap-8 sm:w-6/12 md:w-5/12 lg:w-10/12 xl:w-8/12 2xl:w-7/12 2xl:mr-60">
      <div className="flex xl:items-start xl:w-full">
        <TheRealIcon />
      </div>
      <div className="flex flex-col justify-center gap-4">
        <div className="text-center flex flex-col gap-1 xl:text-left">
          <h1 className="text-xl font-bold 2xl:text-2xl">
            Bem vindo ao TheReal!
          </h1>
          <p className="text-black/70 2xl:text-lg">
            Faça o login ou cadastre-se para saber de tudo sobre o mundo da
            tecnologia e da programação em nossos site
          </p>
        </div>
        <form
          className="flex flex-col gap-8"
          onSubmit={(e: any) => handleLogin(e)}
        >
          <div className="flex flex-col gap-5">
            <div className="w-full flex flex-col">
              <label className="2xl:text-lg">Email</label>
              <input
                required
                name="email"
                type="email"
                placeholder="Insira seu email"
                className="px-3 py-1.5 rounded-md border-black/25 border-solid border focus:border-primary outline-none 2xl:py-2"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="w-full flex flex-col">
              <label className="2xl:text-lg">Senha</label>
              <div className="w-full flex items-center justify-between text-center">
                <input
                  required
                  name="password"
                  type={`${viewPassword == false ? "password" : "text"}`}
                  placeholder="Insira sua senha"
                  className="peer pl-3 py-1.5 w-11/12 rounded-l-md border-black/25 border-solid border border-r-0 focus:border-primary outline-none 2xl:py-2"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="bg-white h-full w-1/12 rounded-r-md border-l-0 border border-solid flex justify-center items-center border-black/25 peer-focus:border-primary cursor-default"
                  onClick={() => setViewPassword(!viewPassword)}
                >
                  <AiOutlineEye className="text-slate-500 cursor-pointer" />
                </button>
              </div>
              <div className="flex justify-end pt-1">
                <a className="text-primary text-sm 2xl:text-base">
                  Esqueceu a senha?
                </a>
              </div>
            </div>
          </div>
          <div className="w-full">
            <button
              className="w-full bg-primary text-white py-2.5 rounded font-semibold 2xl:text-lg"
              type="submit"
            >
              Entrar
            </button>
            vent: any
          </div>
        </form>
      </div>
      <div className="text-black/50 text-center 2xl:text-lg">
        auth
        <p>
          Não possui conta?{" "}
          <a href="#" className="font-semibold text-primary">
            Cadastre-se!
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
