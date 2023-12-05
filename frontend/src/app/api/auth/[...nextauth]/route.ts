import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";  
import api from "@/services/useApi";

export const authOptions : NextAuthOptions = {
    // Nextauth options (Existem diversos providers, ex: Google, Facebook, etc)
    providers: [
        CredentialsProvider({
            name: "Credentials",
            // As credenciais nas quais o usuario ira se logar
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Insira seu email", },
                password: {  label: "Senha", type: "password", placeholder: "Insira sua senha", },
            },
            // Funcao que verifica se as credenciais estao corretas
            async authorize(credentials, req) {
                if (!credentials?.email || !credentials?.password) return null;
                try {
                    const { data } = await api.post("user/login", credentials);
                    const user = data.userWithoutPassword;
                    return user
                } catch (error) {
                    console.log(error);
                    return null;
                }
            }
        })
    ],
    pages: {
        signIn: "/auth/signin",
    }
}


const handler = NextAuth(authOptions)

export { handler as GET, handler as POST}