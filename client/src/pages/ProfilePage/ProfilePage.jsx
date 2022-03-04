import { useState, useEffect } from "react"
import ProfileCard from "../../components/ProfileCard/ProfileCard"
import userService from "../../services/user.service"
import { useContext } from "react"
import { AuthContext } from "../../context/auth.context"



const ProfilePage = () => {

    const { user } = useContext(AuthContext)

    const [userProfile, setUserProfile] = useState({})

    useEffect(() => {
        user && loadProfileInformation()
    }, [user])


    const loadProfileInformation = () => {
        userService
            .getOneUser(user._id)
            .then(({ data }) => setUserProfile(data))
            .catch(err => console.log(err))

    }

    return (
        <>
            <ProfileCard userProfile={userProfile} />

        </>
    )
}

export default ProfilePage