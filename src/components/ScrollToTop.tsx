import { AiOutlineUp } from "react-icons/ai"

const ScrollToTop = () => {

    const handleScrollToTop = () => {
        window.scrollTo(0,0)
    }

    return (
            <button className="flex w-10 h-10 rounded-full bg-gray-400 items-center justify-center" onClick={handleScrollToTop}>
                <AiOutlineUp />
            </button>
    )
}

export default ScrollToTop