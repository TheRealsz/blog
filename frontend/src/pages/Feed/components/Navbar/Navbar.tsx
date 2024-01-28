import TheRealIcon from "../../../../components/svg/TheRealIcon"
import { getUserInfo } from "../../../../utils/userStorage";
import Dropdown from "./Dropdown/Dropdown";
import SignOut from "./SignOut/SignOut";

const Navbar = () => {
    const fullname = getUserInfo("fullname")
    const fullnameFormatted = fullname
        .split(" ")
        .map((name: string) => name.charAt(0))
        .slice(0, 2)
        .join("");
        
    return (
        <>
            <div className="fixed flex justify-center w-full z-10 bg-dark-10 px-5 py-2.5 md:px-6">
                <div className="flex justify-between items-center w-full xl:w-[76rem]">
                    <div className="rounded-full border-2 border-dark-40 flex items-center justify-center w-10 h-10 cursor-pointer md:w-12 md:h-12 md:border-2 xl:w-14 xl:h-14">{fullnameFormatted}</div>
                    <Dropdown />
                    <TheRealIcon color="#FFF" classname="w-24 h-6 md:w-32 xl:w-36" />
                    <SignOut />
                </div>
            </div>
        </>
    )
}

export default Navbar