import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Feed from '../pages/Feed'
import SignIn from '../pages/SignIn'

// Adicionar AuthGuard
export function Router () {
    return (
        <BrowserRouter>
            <Toaster />
            <Routes>
                <Route element={<Feed />} path='/feed' />
                <Route element={<SignIn />} path='/signin' />
            </Routes>
        </BrowserRouter>
    )
}
