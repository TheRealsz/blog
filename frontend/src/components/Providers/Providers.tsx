"use client"
// Mesmo sendo client component, podemos ter server components como children, nao tornando tudo que estiver dentro dele automaticamente client 

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface IProviders {
    children: ReactNode
}

const Providers = ({ children }: IProviders) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    );
}

export default Providers