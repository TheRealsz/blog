import { AiOutlineUp } from "react-icons/ai"

const ScrollToTop = () => {

    const handleScrollToTop = () => {
        window.scrollTo(0,0)
    }

    return (
            <button className="flex justify-center items-center h-12 w-12 bg-gradient-to-tl from-blue-400 to-violet-800 rounded-full text-white lg:h-16 lg:w-16" onClick={handleScrollToTop}>
                <AiOutlineUp />
            </button>
    )
}

export default ScrollToTop