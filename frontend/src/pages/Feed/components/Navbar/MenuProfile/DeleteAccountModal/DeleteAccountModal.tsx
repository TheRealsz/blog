import {
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Dispatch, SetStateAction } from "react"

export default function DeleteAccountModal({ setOpenDeleteAccountModal } : { setOpenDeleteAccountModal: Dispatch<SetStateAction<boolean>>}) {
    return (
        <DialogContent className="w-10/12 bg-dark-20 border-none rounded-lg gap-8 py-10">
            <DialogHeader className="flexs items-center">
                <DialogTitle>Excluir conta</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col items-center w-full">
                <form className="flex w-11/12 flex-col gap-8 md:w-9/12">
                    <div className="flex flex-col gap-2">
                        <p className="text-center font-semibold text-red-600">Realmente deseja excluir sua conta? Essa é uma ação irreversível.</p>
                        <p className="text-center break-words">Todas suas informaçoes como email, senha e posts serão excluidos permanentemente</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email">Confirme seu email</label>
                        <input type="text" className="w-full bg-dark-40 text-dark-50 p-2 rounded-md border-solid border border-dark-40 focus:border-main-900 outline-none 2xl:py-2" placeholder="Insira seu email" />
                        {/* {errors.newFullname && <span className="text-red-500 text-sm">{errors.newFullname.message}</span>} */}
                    </div>
                    <div className="flex flex-col gap-4 md:flex-row">    
                        <button className="border-main-500 border py-1.5 rounded-md flex-1 hover:border-main-600 transition-all outline-none" onClick={() => setOpenDeleteAccountModal(false)}>
                            Cancelar
                        </button>
                        <button className="bg-red-600 py-1.5 rounded-md flex-1 hover:bg-red-700 transition-all outline-none">
                            Excluir conta
                        </button>
                    </div>
                </form>
            </div>
        </DialogContent>
    )
}