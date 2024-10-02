import PostCard from "./components/PostCard/PostCard"
import Navbar from "./components/Navbar/Navbar";
import HeaderFeed from "./components/HeaderFeed/HeaderFeed";
import { Skeleton } from "@/components/ui/skeleton";
import { Error } from "@/components/Error";
import PostModal from "./components/PostModal/PostModal";
import { Plus } from "lucide-react";
import { usePost } from "@/context/PostContext";

export interface IPosts {
    authorID: string
    authorName: string
    createdAt: string
    description: string
    id: string
    title: string
}

const Feed = () => {

    const { isLoading, posts } = usePost()

    return (
        <>
            <div className="w-full h-screen relative">
                <Navbar />
                <HeaderFeed />
                <main className="flex py-10 px-6 flex-col items-center gap-10 xl:py-14">
                    <div className="hidden md:flex md:justify-end w-full xl:w-[76rem]">
                        <PostModal>
                            <button className="flex font-medium justify-end items-center gap-1 bg-main-500 px-3 py-2 rounded-md hover:bg-main-600 transition-all">
                                <Plus size={20} />
                                <span>
                                    Novo Post
                                </span>
                            </button>
                        </PostModal>
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
                    <PostModal>
                        <button className="p-5 bg-main-500 rounded-full hover:bg-main-600 fixed bottom-5 right-3">
                            <Plus size={25} />
                        </button>
                    </PostModal>
                </div>
            </div>
        </>
    )
}

export default Feed