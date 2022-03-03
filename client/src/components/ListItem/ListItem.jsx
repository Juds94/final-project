import { Badge, ListGroup } from "react-bootstrap"

const ListItem = ({ placeDetails }) => {
    console.log(placeDetails)

    return (
        placeDetails ?
            <>
                <h1>Todas las vias de:{placeDetails.name}</h1>

                <ListGroup as="ol" numbered>

                    {placeDetails.pitch.map(elm => {


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

export default ListItem