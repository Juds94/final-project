import { Routes, Route } from 'react-router-dom'
import IndexPage from '../pages/IndexPage/IndexPage'
import LoginPage from '../pages/LogInPage/LoginPage'
import PitchesPage from '../pages/PitchesPage/PitchesPage'
import PlacesPage from '../pages/PlacesPage/PlacesPage'
import ProfilePage from '../pages/ProfilePage/ProfilePage'
import SignupPage from '../pages/SignupPage/SignupPage'
import UsersPage from '../pages/UsersPage/UsersPage'

const AppRoutes = () => {

    return(
        <Routes>

            <Route path="/" element={<IndexPage/>}/>
            <Route path="/escuelas" element={<PlacesPage/>}/>
            <Route path="/vias" element={<PitchesPage/>}/>
            <Route path="/registro" element={<SignupPage/>}/>
            <Route path="/inicio-sesion" element={<LoginPage/>}/>
            <Route path="/usuarios" element={<UsersPage/>}/>
            <Route path="/perfil" element={<ProfilePage/>}/>

        </Routes>
    )
}

export default AppRoutes