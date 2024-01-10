import { BrowserRouter, Route, Routes } from "react-router-dom"
import Feed from "../pages/Feed/Feed"
import SignIn from "../pages/SignIn/SignIn"
import SignUp from "../pages/SignUp/SignUp"
import NotFound from "../pages/NotFoud/NotFound"
import { AuthGuard } from "./AuthGuard"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AuthGuard isPrivate />}>
                    <Route path="/" element={<Feed />} />
                </Route>

                <Route element={<AuthGuard isPrivate={false}/>}>
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router