import { useState, useEffect } from "react"
import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom"
import ListItem from "../../components/ListItem/ListItem"
import placeService from "../../services/places.service"
import GMap from "../../components/Map/GMap"

const PitchesPage = () => {

    const {place_id} = useParams()
    const [placeDetails, setPlaceDetails] = useState()
    
    useEffect(() => {
        loadPlaceDetails()
        
    }, [])

    const loadPlaceDetails = () => {
        placeService
            .getOnePlace(place_id)
            .then(({data})=> setPlaceDetails(data))
            .catch(err => console.log(err))
    }

    return(
        
        <Container>
        <ListItem placeDetails={placeDetails}/>
        {/* <GMap placeDetails={placeDetails} /> */}
        </Container>
      
    )
}

export default PitchesPage