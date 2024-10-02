import { IoIosLogOut } from "react-icons/io";
import userRequest from "../../../../../services/api/users";
import { catchError } from "../../../../../utils/catchError";
import { getCurrentUser, removeCurrentUser } from "../../../../../utils/userStorage";
import { removeTokenFromStorage } from "../../../../../utils/tokenStorage";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

const SignOut = () => {
  const { setSignIn } = useAuth()
  const navigate = useNavigate()
  const user = getCurrentUser()
  const handleSignOut = async () => {
    if (!user) return
    try {
      await userRequest.logout(user._id)
    }
    catch (e) {
      catchError(e, "Erro ao sair")
    } finally {
      removeTokenFromStorage()
      removeCurrentUser()
      setSignIn(false)
      navigate('/signin')
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
