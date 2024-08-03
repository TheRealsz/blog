import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogDescription
} from "@/components/ui/dialog"
import CreatePostType, { createPostSchema } from "@/schema/CreatePost.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Plus } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { AiOutlineLoading3Quarters } from "react-icons/ai"

const CreatePostModal = () => {

    const [isLoading, setIsLoading] = useState()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreatePostType>({
        resolver: zodResolver(createPostSchema)
    })

    const handleCreatePost = () => {
        console.log("oi")
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <div>
                    <button className="p-5 bg-main-500 rounded-full hover:bg-main-600 fixed bottom-5 right-3 md:hidden">
                        <Plus size={25} />
                    </button>
                    <button className="hidden md:flex font-medium justify-end items-center gap-1 bg-main-500 px-3 py-2 rounded-md hover:bg-main-600 transition-all">
                        <Plus size={20} />
                        <span>
                            Novo Post
                        </span>
                    </button>
                </div>
            </DialogTrigger>
            <DialogContent className="w-10/12 bg-dark-20 border-none rounded-lg gap-8 flex flex-col py-10 max-h-[600px]">
                <DialogHeader>
                    <DialogTitle className="text-center">Crie seu post</DialogTitle>
                    <DialogDescription className="text-center">Crie um post e compartilhe seu conhecimento de tecnologia com as pessoas!</DialogDescription>
                </DialogHeader>
                <form className="flex w-full flex-col gap-6" onSubmit={handleSubmit(handleCreatePost)}>
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

export default CreatePostModal