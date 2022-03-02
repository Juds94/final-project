import { useContext, useEffect } from "react"
import { useState } from "react"
import { Container } from "react-bootstrap"
import PlacesCard from "../../components/PlacesCard/PlacesCard"
import { AuthContext } from "../../context/auth.context"
import placeService from "../../services/places.service"

const PlacesPage = () => {

    const [places, setPlaces] = useState([])

    const { isLoggedIn } = useContext(AuthContext)

    useEffect(() => {
        loadPlaces()
    }, [])

    const loadPlaces = () => {
        placeService
            .getAllPlaces()
            .then(({ data }) => setPlaces(data))
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <h1>Todos los sectores de escalada</h1>
            <PlacesCard places={places} />
        </Container>

    )
}

export default PlacesPage