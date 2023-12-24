import { AiOutlineSearch } from "react-icons/ai"
import TheRealIcon from "../../../../components/svg/TheRealIcon"

const HeaderFeed = () => {
    return (
        <header className="flex flex-col py-12 px-6 justify-center items-center gap-2 bg-dark20 md:py-16 md:px-8 md:gap-12 xl:px-0 xl:gap-12">
            <TheRealIcon color="#FFF" classname="w-40 md:w-56 xl:w-60" />
            <div className='relative w-full justify-center flex flex-row xl:w-[76rem]'>
                <div className="absolute inset-y-0 left-2 flex items-center pl-3.5 pointer-events-none">
                    <AiOutlineSearch className="text-lg text-primary-500 font-bold md:text-xl" />
                </div>
                <input type="text" className="outline-none py-4 px-6 w-full rounded-lg border-solid border-2 border-dark40 pl-14 bg-dark30 text-dark50 placeholder:text-dark50 font-medium text-sm md:text-base" placeholder="Pesquisar no blog"></input>
            </div>
        </header>
    )
}

export default HeaderFeed
