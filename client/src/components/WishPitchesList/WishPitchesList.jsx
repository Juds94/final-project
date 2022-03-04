import { Badge, ListGroup } from "react-bootstrap"

const WishPitchesList = ({ userProfile }) => {

    return (

        userProfile ?
            <>
                <h1> Aquí están las vías que quieres hacer {userProfile.username}!</h1>

                <ListGroup as="ol" numbered>
                    {userProfile.wishPitches?.map(elm => {
                        return (
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start"
                                key={elm._id}
                            >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">{elm.name}</div>
                                    <p>Metros: {elm.meters} | Cintas: {elm.quickdraws} | Sector: {elm.sector}</p>
                                </div>
                                <Badge variant="primary" pill>
                                    {elm.diff}
                                </Badge>
                            </ListGroup.Item>

                        )

                    })}
                </ListGroup>
            </>
            :
            <>Loading...</>


    )

}

export default WishPitchesList

