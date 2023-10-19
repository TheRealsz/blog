import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Feed from '../pages/Feed'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'
import AuthGuard from './AuthGuard'

export function Router () {
    return (
        <BrowserRouter>
            <Toaster />
            <Routes>
                <Route element={<AuthGuard isPrivate={false}/>}>
                    <Route element={<Login />} path='/' />
                    <Route element={<SignUp />} path='/SignUp' />
                </Route>
                <Route element={<AuthGuard isPrivate/>}>
                    <Route element={<Feed />} path='/feed' />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
