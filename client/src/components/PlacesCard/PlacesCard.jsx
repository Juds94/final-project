import { Link } from "react-router-dom"
import GMap from "../Map/GMap"

const { Card } = require("react-bootstrap")



const PlacesCard = ({ places }) => {

    return (
        <>
            {places.map(place => {
                return (
                    <Card className="bg-dark text-white" key={place._id}>
                        <Link to={`/vias/${place._id}`}>
                            <Card.Img src={place.placeImg} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>{place.name}</Card.Title>
                                <Card.Text>
                                    {place.description}
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Link>
                        <GMap place={place} />
                    </Card>
                )
            })}

        </>
    )
}

export default PlacesCard