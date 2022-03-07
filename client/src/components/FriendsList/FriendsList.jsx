import { useContext } from "react"
import { Button, Card } from "react-bootstrap"
import { AuthContext } from "../../context/auth.context"
import userService from "../../services/user.service"
import { useNavigate } from "react-router-dom"


const FriendsList = ({ userProfile, refreshProfileInformation }) => {
    console.log(userProfile)

    const { isLoggedIn } = useContext(AuthContext)
    const navigate = useNavigate()


    const removeFriend = (user_id) => {

        userService
            .removeFriend(user_id)
            .then(() => refreshProfileInformation())
            .catch(err => console.log(err))

    }

    return (

        userProfile ?
            <>

                <h1> Aquí están tus amigos {userProfile.username}!</h1>

                {userProfile.friends?.map(elm => {

                    return (
                        <div>
                            {isLoggedIn && <Button variant="warning" onClick={() => removeFriend(elm._id)} >Eliminar este usuario de tus amigos</Button>}

                            <Card style={{ width: '18rem' }} key={elm._id}>
                                <Card.Img variant="top" src={elm.profilePic} />
                                <Card.Body>
                                    <Card.Title>Username</Card.Title>
                                    <Card.Text>
                                        {elm.username}
                                    </Card.Text>
                                    <Card.Title>Descripción</Card.Title>
                                    <Card.Text>
                                        {elm.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>


                        </div>
                    )
                })}

            </>
            :
            <>Loading...</>
    )



}

export default FriendsList