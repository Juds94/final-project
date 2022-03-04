import { useState, useEffect } from "react"
import ProfileCard from "../../components/ProfileCard/ProfileCard"
import userService from "../../services/user.service"
import { useContext } from "react"
import { AuthContext } from "../../context/auth.context"
import FriendsList from "../../components/FriendsList/FriendsList"
import WishPitchesList from "../../components/WishPitchesList/WishPitchesList"

const ProfilePage = () => {

    const { user } = useContext(AuthContext)

    const [userProfile, setUserProfile] = useState({})

    useEffect(() => {
        user && loadProfileInformation()
    }, [user])


    const loadProfileInformation = () => {
        userService
            .getOneUser(user._id)
            .then(({ data }) => {
                console.log(data)
                setUserProfile(data)
            })

            .catch(err => console.log(err))

    }

    return (
        <>
            <ProfileCard userProfile={userProfile} />
            {userProfile.friends && userProfile.friends.length !== 0 && <FriendsList userProfile={userProfile} />}
            {userProfile.wishPitches && userProfile.wishPitches.length !== 0 && <WishPitchesList userProfile={userProfile} />}


        </>
    )
}

export default ProfilePage