import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogDescription
} from "@/components/ui/dialog"
import { usePost } from "@/context/PostContext"
import CreatePostType, { createPostSchema } from "@/schema/CreatePost.schema"
import postRequest from "@/services/api/posts"
import { catchError } from "@/utils/catchError"
import { getUserInfo } from "@/utils/userStorage"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { AiOutlineLoading3Quarters } from "react-icons/ai"

interface IPostModal {
    children: React.ReactNode
    postId?: string
    title?: string
    description?: string
}

const PostModal = ({ children, title, description, postId }: IPostModal) => {
    const userId = getUserInfo("_id")
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { getAllPosts } = usePost()

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<CreatePostType>({
        resolver: zodResolver(createPostSchema),
        defaultValues: {
            title: title ?? "",
            description: description ?? ""
        }
    })

    const handleSavePost = async (createPostValues: CreatePostType) => {
        setIsLoading(true)

        try {
            const { data } = postId ? await postRequest.updatePost(userId, postId, createPostValues) : await postRequest.createPost(userId, createPostValues)
            toast.success(data.message)
            reset()
            getAllPosts()
        } catch (e) {
            catchError(e, "Erro ao salvar post")
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
            <DialogContent onClick={(e) => e.stopPropagation()} className="w-10/12 bg-dark-20 border-none rounded-lg gap-8 flex flex-col py-10 max-h-[600px]">
                {
                    !postId && (
                        <DialogHeader>
                            <DialogTitle className="text-center">Crie seu post</DialogTitle>
                            <DialogDescription className="text-center">Crie um post e compartilhe seu conhecimento de tecnologia com as pessoas!</DialogDescription>
                        </DialogHeader>
                    )
                }
                <form className="flex w-full flex-col gap-6" onSubmit={handleSubmit(handleSavePost)}>
                    <div className="flex flex-col gap-1 w-full">
                        <label htmlFor="title">Título</label>
                        <input disabled={isLoading} {...register("title")} type="text" className="w-full bg-dark-40 text-dark-50 p-2 rounded-md border-solid border border-dark-40 focus:border-main-900 outline-none 2xl:py-2" placeholder="Insira o título" />
                        {errors.title && <span className="text-red-500 text-sm">{errors.title.message}</span>}
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                        <label htmlFor="description">Descrição</label>
                        <textarea disabled={isLoading} {...register("description")} className="w-full bg-dark-40 h-40 text-dark-50 p-2 rounded-md border-solid border border-dark-40 focus:border-main-900 outline-none 2xl:py-2" placeholder="Insira a descrição" />
                        {errors.description && <span className="text-red-500 text-sm">{errors.description.message}</span>}
                    </div>
                    <div className="flex justify-end w-full">
                        <button disabled={isLoading} type="submit" className="font-medium flex items-center justify-center gap-2 bg-main-500 py-2 px-4 rounded-md text-white hover:bg-main-600 transition-all outline-none 2xl:text-lg disabled:opacity-60">
                            {isLoading && <AiOutlineLoading3Quarters className="animate-spin" />}
                            Salvar
                        </button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default PostModal