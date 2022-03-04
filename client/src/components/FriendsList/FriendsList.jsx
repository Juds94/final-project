import { Card } from "react-bootstrap"

const FriendsList = ({ userProfile }) => {
    console.log(userProfile)

    return (

        userProfile ?
            <>

                <h1> Aquí están tus amigos {userProfile.username}!</h1>

                {userProfile.friends?.map(elm => {

                    return (

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



                    )
                })}

            </>
            :
            <>Loading...</>
    )



}

export default FriendsList