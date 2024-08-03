import {
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import DeleteAccountSchemaType, { deleteAccountSchema } from "@/schema/DeleteAccount.schema"
import userRequest from "@/services/api/users"
import { catchError } from "@/utils/catchError"
import { removeTokenFromStorage } from "@/utils/tokenStorage"
import { getUserInfo, removeCurrentUser } from "@/utils/userStorage"
import { zodResolver } from "@hookform/resolvers/zod"
import { Dispatch, SetStateAction, useState } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import { useNavigate } from "react-router-dom"

const DeleteAccountModal = ({ setOpenDeleteAccountModal }: { setOpenDeleteAccountModal: Dispatch<SetStateAction<boolean>> }) => {

    const [userEmail, userId] = getUserInfo("email", "_id")
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<DeleteAccountSchemaType>({
        resolver: zodResolver(deleteAccountSchema)
    })

    const handleDeleteAccount = async ({ email }: DeleteAccountSchemaType) => {
        setIsLoading(true)

        if (email !== userEmail) {
            setIsLoading(false)
            return toast.error("Email incorreto")
        }

        try {
            const { data } = await userRequest.deleteAccount(userId)
            toast.success(data.message)
            removeTokenFromStorage()
            removeCurrentUser()
            navigate('/signin')
        } catch (e) {
            catchError(e, "Erro ao excluir conta")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <DialogContent className="w-10/12 bg-dark-20 border-none rounded-lg gap-8 py-10">
            <DialogHeader className="flexs items-center">
                <DialogTitle>Excluir conta</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col items-center w-full">
                <form className="flex w-11/12 flex-col gap-6 md:w-9/12" onSubmit={handleSubmit(handleDeleteAccount)}>
                    <div className="flex flex-col gap-2">
                        <p className="text-center font-semibold text-red-600">Realmente deseja excluir sua conta? Essa é uma ação irreversível.</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email">Confirme seu email</label>
                        <input disabled={isLoading} {...register("email")} type="text" className="w-full bg-dark-40 text-dark-50 p-2 rounded-md border-solid border border-dark-40 focus:border-main-900 outline-none 2xl:py-2" placeholder="Insira seu email" />
                        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                    </div>
                    <p className="text-center break-words text-xs text-white/60">Todas suas informaçoes como email, senha e posts serão excluidos permanentemente</p>
                    <div className="flex flex-col gap-4 md:flex-row">
                        <button disabled={isLoading} className="border-dark-50 border font-medium py-1.5 rounded-md flex-1 hover:border-dark-40 hover:bg-dark-30 transition-all outline-none disabled:bg-opacity-50 disabled:text-white/50" onClick={() => setOpenDeleteAccountModal(false)}>
                            Cancelar
                        </button>
                        <button type="submit" disabled={isLoading} className="bg-red-600 font-medium py-1.5 rounded-md flex-1 flex items-center justify-center gap-2 hover:bg-red-700 transition-all outline-none disabled:bg-opacity-50 disabled:text-white/50">
                            {
                                isLoading && <AiOutlineLoading3Quarters className="animate-spin" />
                            }
                            Excluir conta
                        </button>
                    </div>
                </form>
            </div>
        </DialogContent>
    )
}

export default DeleteAccountModal