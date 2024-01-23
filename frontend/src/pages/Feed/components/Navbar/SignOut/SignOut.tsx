import { IoIosLogOut } from "react-icons/io";
import userRequest from "../../../../../services/api/users";
import toast, { Toaster } from "react-hot-toast";
import { catchError } from "../../../../../utils/catchError";
import { getCurrentUser, removeCurrentUser } from "../../../../../utils/userStorage";
import { removeTokenFromStorage } from "../../../../../utils/tokenStorage";

const SignOut = () => {
  const user = getCurrentUser()
  const handleSignOut = async () => {
    if (!user) return
    try {
      await userRequest.logout(user._id)
      removeTokenFromStorage()
      removeCurrentUser()
      window.location.reload()
    }
    catch (e) {
      toast.error(catchError(e) || 'Erro ao fazer logout', {
        style: {
          background: '#333',
          color: '#fff',
        },
      })
    }
  }
  return (
    <>
      <Toaster />
      <div className="flex items-center gap-1.5 text-red-500 cursor-pointer" onClick={handleSignOut}>
        <span className="hidden md:block xl:text-lg">Sair</span>
        <IoIosLogOut className="text-2xl xl:text-3xl" />
      </div>
    </>
  );
};

export default SignOut;
