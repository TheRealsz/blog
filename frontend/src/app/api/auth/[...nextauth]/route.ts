import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";  
import api from "@/services/useApi";

const authOptions : NextAuthOptions = {
    // Nextauth options (Existem diversos providers, ex: Google, Facebook, etc)
    providers: [
        CredentialsProvider({
            name: "credentials",
            // As credenciais nas quais o usuario ira se logar
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Insira seu email", },
                password: {  label: "Senha", type: "password", placeholder: "Insira sua senha", },
            },
            // Funcao que verifica se as credenciais estao corretas
            async authorize(credentials, req) {
                
                if (!credentials?.email || !credentials?.password) return null;
                
                try {
                    const { data } = await api.post("user/login", 
                     {
                        email: credentials?.email,
                        password: credentials?.password
                     }
                    );
                    const user = await data
                    if(user){
                        
                        return user
                    }else{
                        return null
                    }
                    
                } catch (error) {
                    console.error(error)
                }
            }
        })
    ],
    pages: {
        signIn: "/auth/signin",
    },
    secret: process.env.NEXTAUTH_SECRET,

    callbacks:{
        async jwt({token,user}){
            user && (token.user = user)
            return token
        },
        async session({session, token}){
            session = token.user as any
            return session
         },
         

    }
    // debug: false,
    // session: {
    //     strategy: 'jwt',
    // },
    // jwt: {
    //     secret: process.env.NEXTAUTH_SECRET
    // },
}


const handler = NextAuth(authOptions)

export { handler as GET, handler as POST, authOptions}