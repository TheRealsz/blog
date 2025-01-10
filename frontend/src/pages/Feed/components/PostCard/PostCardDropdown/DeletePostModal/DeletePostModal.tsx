import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ReactNode } from "react"
import { AiOutlineLoading3Quarters } from "react-icons/ai"

const DeletePostModal = ({ children }: { children: ReactNode }) => {
    const isLoading = false
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button onClick={(e) => e.stopPropagation()}>
                    {children}
                </button>
            </DialogTrigger>
            <DialogContent onClick={(e) => e.stopPropagation()} className="w-10/12 bg-dark-20 border-none rounded-lg gap-8 py-10">
                <DialogHeader className="flexs items-center">
                    <DialogTitle>Excluir post</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col items-center w-full">
                    <form className="flex w-11/12 flex-col gap-6 md:w-9/12">
                        <div className="flex flex-col gap-2">
                            <p className="text-center">Realmente deseja excluir seu post? Essa é uma ação irreversível.</p>
                        </div>
                        <div className="flex flex-col gap-4 md:flex-row">
                            <button className="border-dark-50 border font-medium py-1.5 rounded-md flex-1 hover:border-dark-40 hover:bg-dark-30 transition-all outline-none disabled:bg-opacity-50 disabled:text-white/50">
                                Cancelar
                            </button>
                            <button type="submit" className="bg-red-600 font-medium py-1.5 rounded-md flex-1 flex items-center justify-center gap-2 hover:bg-red-700 transition-all outline-none disabled:bg-opacity-50 disabled:text-white/50">
                                {
                                    isLoading && <AiOutlineLoading3Quarters className="animate-spin" />
                                }
                                Excluir post
                            </button>
                        </div>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default DeletePostModal