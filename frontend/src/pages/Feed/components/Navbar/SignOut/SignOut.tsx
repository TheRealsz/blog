import { IoIosLogOut } from "react-icons/io";
import userRequest from "../../../../../services/api/users";
import toast from "react-hot-toast";
import { catchError } from "../../../../../utils/catchError";
import { getCurrentUser, removeCurrentUser } from "../../../../../utils/userStorage";
import { removeTokenFromStorage } from "../../../../../utils/tokenStorage";
import { useAuth } from "@/context/AuthContext";

const SignOut = () => {
  const { setSignIn } = useAuth()
  const user = getCurrentUser()
  const handleSignOut = async () => {
    if (!user) return
    try {
      await userRequest.logout(user._id)
    }
    catch (e) {
      toast.error(catchError(e) || 'Erro ao fazer logout', {
        style: {
          background: '#333',
          color: '#fff',
        },
      })
    } finally {
      removeTokenFromStorage()
      removeCurrentUser()
      setSignIn(false)
    }
  }
  return (
    <>
      <div className="flex items-center gap-1.5 text-red-500 cursor-pointer" onClick={handleSignOut}>
        <span className="hidden md:block xl:text-lg">Sair</span>
        <IoIosLogOut className="text-2xl xl:text-3xl" />
      </div>
    </>
  );
};

export default SignOut;
