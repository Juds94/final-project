import { Card } from "react-bootstrap"

const UsersList = ({ usersInfo }) => {
    console.log(usersInfo)

    return (

        usersInfo ?
            <>

                <h1> Encuentra a tus amigos!!</h1>

                {usersInfo?.map(elm => {

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

export default UsersList