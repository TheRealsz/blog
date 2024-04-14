import {
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import ChangePasswordSchemaType, { changePasswordSchema } from "@/schema/ChangePassword.schema"
import userRequest from "@/services/api/users"
import { catchError } from "@/utils/catchError"
import { getUserInfo } from "@/utils/userStorage"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"

const ChangePasswordModal = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<ChangePasswordSchemaType>({
        resolver: zodResolver(changePasswordSchema)
    })

    const handleChangePassword = async ({ newPassword }: ChangePasswordSchemaType) => {
        const id = getUserInfo("_id")
        try {
            const { data } = await userRequest.changePassword(id, newPassword)
            toast.success(data.message, {
                style: {
                    background: '#333',
                    color: '#fff',
                },
            })
        } catch (e) {
            console.error(e)
            toast.error(catchError(e) || 'Erro ao editar perfil', {
                style: {
                    background: '#333',
                    color: '#fff',
                },
            })
        } finally {
            reset()
        }
    }

    return (
        <DialogContent className="w-10/12 bg-dark-20 border-none rounded-lg gap-8 py-10">
            <DialogHeader className="flexs items-center">
                <DialogTitle>Trocar senha</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col items-center w-full gap-6">
                <form className="flex w-11/12 flex-col gap-6 md:w-9/12" onSubmit={handleSubmit(handleChangePassword)}>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="newPassword">Nova senha</label>
                        <input  {...register("newPassword")} type="password" className="w-full bg-dark-40 text-dark-50 p-2 rounded-md border-solid border border-dark-40 focus:border-main-900 outline-none 2xl:py-2" placeholder="Insira sua nova senha" />
                        {errors.newPassword && <span className="text-red-500 text-sm">{errors.newPassword.message}</span>}
                    </div>
                    <button type="submit" className="w-full bg-main-500 py-2 rounded-md text-white hover:bg-main-600 transition-all outline-none 2xl:text-lg">Salvar</button>
                </form>
            </div>
        </DialogContent>
    )
}

export default ChangePasswordModal