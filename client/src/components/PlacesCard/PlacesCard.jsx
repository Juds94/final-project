import { Link } from "react-router-dom"
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
                            <Card.Text>MAPA</Card.Text>
                        </Card.ImgOverlay>
                        </Link>
                    </Card>
                )
            })}

        </>
    )
}

export default PlacesCard