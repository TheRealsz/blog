import HeaderFeed from "./components/HeaderFeed/HeaderFeed"
import PostCard from "./components/PostCard/PostCard"

// Enquanto nao chegar as informacoes do backend, fazer um loading diferente

const Feed = () => {
    return (
        <div className="w-full h-screen">
            <HeaderFeed />
            <main className="flex py-10 px-6 flex-col items-center gap-10 xl:py-20">
                <PostCard />
                <PostCard />
            </main>
        </div>
    )
}

export default Feed