import { IPosts } from "@/pages/Feed/Feed";
import postRequest from "@/services/api/posts";
import { catchError } from "@/utils/catchError";
import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";

interface IPostContext {
    posts : IPosts[]
    setPosts: Dispatch<SetStateAction<IPosts[]>>
    getAllPosts: () => Promise<void>
    isLoading: boolean
    setIsLoading: Dispatch<SetStateAction<boolean>>
}

const PostContext = createContext({} as IPostContext)

const PostProvider = ({ children }: { children: React.ReactNode }) => {
    const [posts, setPosts] = useState<IPosts[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const getAllPosts = async () => {
        setIsLoading(true)
        try {
            const { data } = await postRequest.getAllPost()
            setPosts(data)
        } catch (e) {
            console.error(e)
            catchError(e, "Erro ao buscar posts")
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getAllPosts()
    }, [])

    return (
        <PostContext.Provider value={{
            posts,
            setPosts,
            getAllPosts,
            isLoading,
            setIsLoading
        }}>
            {children}
        </PostContext.Provider>
    )
}


export const usePost = () => useContext(PostContext)
export default PostProvider