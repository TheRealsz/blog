import { AiOutlineSearch } from "react-icons/ai"

const HeaderFeed = () => {
    return (
        <>
            <header className="flex pt-20 py-4 px-6 justify-center items-center md:py-7 md:pt-20 md:px-8 md:gap-12 xl:px-0 xl:gap-12 xl:pt-24 xl:py-7">
                <div className='relative w-full justify-center flex flex-row xl:w-[76rem]'>
                    <div className="absolute inset-y-0 left-2 flex items-center pl-3.5 pointer-events-none">
                        <AiOutlineSearch className="text-lg text-main-500 font-bold md:text-xl" />
                    </div>
                    <input type="text" className="outline-none py-4 px-6 w-full rounded-lg border-solid border border-dark-40 pl-14 bg-dark-30 text-dark-50 placeholder:text-dark-50 font-medium text-sm md:text-base focus:border-main-700" placeholder="Pesquisar no blog"></input>
                </div>
            </header>
        </>
    )
}

export default HeaderFeed