import PostCard from "./components/PostCard/PostCard"
import Navbar from "./components/Navbar/Navbar";
import HeaderFeed from "./components/HeaderFeed/HeaderFeed";

const Feed = () => {
    return (
        <>
            <div className="w-full h-screen relative">
                <Navbar />
                <HeaderFeed />
                <main className="flex py-10 px-6 flex-col items-center gap-10 xl:py-20">
                    <PostCard />
                    <PostCard />
                    <PostCard /> 
                    <PostCard />
                    <PostCard />
                    <PostCard />
                </main>
            </div>
        </>
    )
}

export default Feed