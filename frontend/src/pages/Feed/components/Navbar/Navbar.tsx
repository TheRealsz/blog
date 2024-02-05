import TheRealIcon from "../../../../components/svg/TheRealIcon"
import MenuProfile from "./MenuProfile/MenuProfile";
import SignOut from "./SignOut/SignOut";

const Navbar = () => {
    return (
        <>
            <div className="fixed flex justify-center w-full z-10 bg-dark-10 px-5 py-2.5 md:px-6">
                <div className="flex justify-between mx-auto items-center w-full xl:w-[76rem]">
                    <MenuProfile />
                    <TheRealIcon color="#FFF" classname="w-24 h-6 md:w-32 xl:w-36" />
                    <SignOut />
                </div>
            </div>
        </>
    )
}

export default Navbar