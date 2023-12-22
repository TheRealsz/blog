import { ReactNode } from "react"

const AuthLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="w-full h-screen flex">
            <main className="w-full flex flex-col items-center justify-center lg:w-1/2">
                {children}
            </main>
            <div className="hidden bg-gradient-to-r from-primary to-blue_gradient lg:flex lg:w-1/2">
            </div>
        </div>
    )
}

export default AuthLayout;