import { IoIosLogOut } from "react-icons/io";
import TheRealIcon from "../../../../components/svg/TheRealIcon"

const Navbar = () => {
    return (
        <>
            <div className="fixed flex justify-center w-full z-10 bg-dark10 px-5 py-2.5 md:px-6">
                <div className="flex justify-between items-center w-full xl:w-[76rem]">
                    <div className="rounded-full border-2 border-dark40 flex items-center justify-center w-10 h-10 cursor-pointer md:w-12 md:h-12 md:border-2 xl:w-14 xl:h-14">RD</div>
                    <TheRealIcon color="#FFF" classname="w-24 h-6 md:w-32 xl:w-36" />
                    <div className="flex items-center gap-1.5 text-red-500 cursor-pointer">
                        <span className="hidden md:block xl:text-lg">Sair</span>
                        <IoIosLogOut className="text-2xl xl:text-3xl" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar