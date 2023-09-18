import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Feed from '../pages/Feed'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'

export function Router () {
    return (
        <BrowserRouter>
            <Toaster />
            <Routes>
                <Route element={<Login />} path='/' />
                <Route element={<Feed />} path='/feed' />
                <Route element={<SignUp />} path='/SignUp' />
            </Routes>
        </BrowserRouter>
    )
}
