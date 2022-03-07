import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/auth.context"
import userService from "../../services/user.service"



const PerformancePage = () => {

    const { user, isLoggedIn } = useContext(AuthContext)
    const [userProfile, setUserProfile] = useState({})
    const [meters, setMeters] = useState(0)

    useEffect(() => {
        user && loadProfileInformation()
    }, [user])

    const loadProfileInformation = () => {
        userService
            .getOneUser(user._id)
            .then(({ data }) => {
                setUserProfile(data)
            })

            .catch(err => console.log(err))

    }

 const getAllMeters = () => {
        let sumMeters = 0
        userProfile.donePitches?.forEach(eachPitch => {
            sumMeters += eachPitch.pitch.meters
           setMeters(sumMeters)
           console.log(sumMeters)
        })
    }

    useEffect(()=> {
        getAllMeters()
    }, [meters])
    

    


    return (
        <>
        <h1>Hola {userProfile.username}</h1>
        <p>has realizado {meters} </p>
        </>

    )
}

export default PerformancePage