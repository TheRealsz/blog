import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { usePost } from "@/context/PostContext"
import postRequest from "@/services/api/posts"
import { catchError } from "@/utils/catchError"
import { getUserInfo } from "@/utils/userStorage"
import { ReactNode, useState } from "react"
import toast from "react-hot-toast"
import { AiOutlineLoading3Quarters } from "react-icons/ai"

interface IDeletePostModal {
    postId: string
    children: ReactNode
}

const DeletePostModal = ({ children, postId }: IDeletePostModal) => {
    const [isLoading, setIsLoading] = useState(false)
    const { getAllPosts } = usePost()
    const userId = getUserInfo("_id")

    const handleDeletePost = async () => {
        setIsLoading(true)
        try {
            await postRequest.deletePost(userId, postId)
            getAllPosts()
            toast.success("Post excluído com sucesso")
        } catch (error) {
            console.log(error)
            catchError(error, "Erro ao excluir post")
        } finally {
            setIsLoading(false)
        }
    }

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
                    <div className="flex w-11/12 flex-col gap-6 md:w-9/12">
                        <div className="flex flex-col gap-2">
                            <p className="text-center">Realmente deseja excluir seu post? Essa é uma ação irreversível.</p>
                        </div>
                        <div className="flex flex-col gap-4 md:flex-row">
                            <button disabled={isLoading} className="border-dark-50 border font-medium py-1.5 rounded-md flex-1 hover:border-dark-40 hover:bg-dark-30 transition-all outline-none disabled:bg-opacity-50 disabled:text-white/50">
                                Cancelar
                            </button>
                            <button type="button" disabled={isLoading} onClick={handleDeletePost} className="bg-red-600 font-medium py-1.5 rounded-md flex-1 flex items-center justify-center gap-2 hover:bg-red-700 transition-all outline-none disabled:bg-opacity-50 disabled:text-white/50">
                                {
                                    isLoading && <AiOutlineLoading3Quarters className="animate-spin" />
                                }
                                Excluir post
                            </button>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default DeletePostModal