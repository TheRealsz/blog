import PostCard from "./components/PostCard/PostCard"
import Navbar from "./components/Navbar/Navbar";
import HeaderFeed from "./components/HeaderFeed/HeaderFeed";
import CreatePostModal from "./components/CreatePostModal/CreatePostModal";
import { catchError } from "@/utils/catchError";
import postRequest from "@/services/api/posts";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Error } from "@/components/Error";

export interface IPosts {
    authorID: string
    authorName: string
    createdAt: string
    description: string
    id: string
    title: string
}

const Feed = () => {

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
        <>
            <div className="w-full h-screen relative">
                <Navbar />
                <HeaderFeed />
                <main className="flex py-10 px-6 flex-col items-center gap-10 xl:py-14">
                    <div className="hidden md:flex md:justify-end w-full xl:w-[76rem]">
                        <CreatePostModal />
                    </div>
                    <div className="flex flex-col gap-10 w-full items-center">
                        {
                            isLoading
                                ?
                                (
                                    <div className="w-full flex flex-col items-center gap-10">
                                        <Skeleton className="w-full h-52 rounded-lg bg-dark-40 xl:w-[76rem]" />
                                        <Skeleton className="w-full h-52 rounded-lg bg-dark-40 xl:w-[76rem]" />
                                        <Skeleton className="w-full h-52 rounded-lg bg-dark-40 xl:w-[76rem]" />
                                    </div>
                                )
                                :
                                posts.length > 0 ?
                                    posts.map(
                                        post => (
                                            <PostCard
                                                key={post.id}
                                                authorID={post.authorID}
                                                authorName={post.authorName}
                                                createdAt={post.createdAt}
                                                description={post.description}
                                                id={post.id}
                                                title={post.title}
                                            />
                                        )
                                    )
                                    :
                                    <Error />

                        }
                    </div>
                </main>
                <div className="md:hidden">
                    <CreatePostModal />
                </div>
            </div>
        </>
    )
}

export default Feed