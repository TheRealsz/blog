import {
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import EditProfileFormType, { editProfileSchema } from "@/schema/EditProfile.schema";
import userRequest from "@/services/api/users";
import { getUserInfo, setCurrentUser } from "@/utils/userStorage";
import toast from "react-hot-toast";
import { catchError } from "@/utils/catchError";
import { useUser } from "@/context/UserContext";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";


const EditNameModal = ({ fullnameFormatted }: { fullnameFormatted: string }) => {

    const { setUser } = useUser()
    const [isLoading, setIsLoading] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<EditProfileFormType>({
        resolver: zodResolver(editProfileSchema)
    })

    const handleEditProfile = async ({ newFullname }: EditProfileFormType) => {
        setIsLoading(true)
        const id = getUserInfo("_id")
        try {
            const { data } = await userRequest.editProfile(id, newFullname)
            toast.success(data.message)
            const { userWithoutPassword } = data
            const user = {
                _id: userWithoutPassword._id,
                fullname: userWithoutPassword.fullname,
                email: userWithoutPassword.email,
            }
            setCurrentUser(user)
            setUser(user)
        } catch (e) {
            catchError(e, "Erro ao editar perfil")
        } finally {
            setIsLoading(false)
            reset()
        }
    }

    return (
        <DialogContent className="w-10/12 bg-dark-20 border-none rounded-lg gap-8 py-10">
            <DialogHeader className="flexs items-center">
                <DialogTitle>Editar perfil</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col items-center w-full gap-6">
                <div className="rounded-full border-2 border-dark-40 flex items-center justify-center w-16 h-16 text-xl md:w-20 md:h-20 md:border-2 md:text-2xl">{fullnameFormatted}</div>
                <form className="flex w-11/12 flex-col gap-6 md:w-9/12" onSubmit={handleSubmit(handleEditProfile)}>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="newFullname">Nome completo</label>
                        <input {...register("newFullname")} type="text" className="w-full bg-dark-40 text-dark-50 p-2 rounded-md border-solid border border-dark-40 focus:border-main-900 outline-none 2xl:py-2" placeholder="Insira seu nome completo" />
                        {errors.newFullname && <span className="text-red-500 text-sm">{errors.newFullname.message}</span>}
                    </div>
                    <button disabled={isLoading} type="submit" className="w-full font-semibold flex items-center justify-center gap-2 bg-main-500 py-2 rounded-md text-white hover:bg-main-600 transition-all outline-none 2xl:text-lg disabled:opacity-60">
                        {isLoading && <AiOutlineLoading3Quarters className="animate-spin" />}
                        Salvar
                    </button>
                </form>
            </div>
        </DialogContent>
    )
}

export default EditNameModal