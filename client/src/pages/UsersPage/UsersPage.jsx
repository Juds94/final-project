import { useState } from "react"
import { useEffect } from "react"
import { useContext } from "react"
import UserSearchBar from "../../components/UserSearchBar/UserSearchBar"
import UsersList from "../../components/UsersList/UsersList"
import { AuthContext } from "../../context/auth.context"
import userService from "../../services/user.service"


const UsersPage = () => {

    const { user } = useContext(AuthContext)

    const [usersInfo, setUsersInfo] = useState([])


    useEffect(() => {
        user && loadUsersInformation()
    }, [user])


    const loadUsersInformation = (words) => {

        userService
            .getAllUsers(words)
            .then(({ data }) => {
                setUsersInfo(data)
            })
            .catch(err => console.log(err))
    }
    return (
        <>
            {usersInfo && <UsersList usersInfo={usersInfo} />}
            <UserSearchBar handleUserSearchBar={loadUsersInformation} />
        </>
    )
}

export default UsersPage