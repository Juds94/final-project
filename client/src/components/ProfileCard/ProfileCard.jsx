import { Card } from "react-bootstrap"

const ProfileCard = ({ userProfile }) => {

    return (
        <>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={userProfile.profilePic} />
                <Card.Body>
                    <Card.Title>Username</Card.Title>
                    <Card.Text>
                        {userProfile.username}
                    </Card.Text>
                    <Card.Title>Descripción</Card.Title>
                    <Card.Text>
                        {userProfile.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>




    )

}

export default ProfileCard