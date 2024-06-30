import PostCardDropdown from "./PostCardDropdown/PostCardDropdown"

const PostCard = () => {
    return (
        <>
            <div className="flex py-8 px-6 flex-col gap-5 rounded-lg border-solid border-2 border-dark-40 bg-dark-20 md:p-10 md:gap-6 xl:w-[76rem] xl:gap-5">
                <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-main-500 md:text-sm xl:text-base">Data de publicacao</span>
                    <PostCardDropdown />
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-medium xl:text-2xl">O que é linguagem de programação? Conheça as principais</h3>
                    <p className="text-dark-50 text-sm font-medium leading-6 md:text-base xl:text-xl xl:leading-8">Uma das mais populares vertentes da tecnologia da informação, a área de programação segue tendo muita demanda de trabalho justamente pela velocidade com que dispositivos tecnológicos vêm avançando.</p>
                </div>
            </div>
        </>
    )
}

export default PostCard