import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/auth.context"
import placeService from "../../services/places.service"
import userService from "../../services/user.service"
import EditPlaceForm from "../EditPlaceForm/EditPlaceForm"
const { Card, Button, Modal } = require("react-bootstrap")

const PlacesCard = ({ places, refreshPlaces }) => {

    const [showEditModal, setShowEditModal] = useState(false)
    const [placeInfo, setPlaceInfo] = useState({})

    const { isAdmin, isEquip, isLoggedIn } = useContext(AuthContext)

    const handleEditModalClose = () => setShowEditModal(false)
    const handleEditModalOpen = (place) => {
        setPlaceInfo(place)
        setShowEditModal(true)
    }

    const deletePlace = (place_id) => {
        placeService
            .deletePlace(place_id)
            .then(() => refreshPlaces())
            .catch(err => console.log(err))
    }

    const addFavPlace = (place_id) => {
        userService
            .addFavPlaces(place_id)
            .then(() => refreshPlaces())
            .catch(err => console.log(err))
    }

    return (
        <>
            {places.map(place => {
                return (

                    <div key={place._id}>
                        {isEquip && <Button variant="warning" onClick={() => handleEditModalOpen(place)} >Editar  escuela</Button>}
                        {isAdmin && <Button variant="warning" onClick={() => handleEditModalOpen(place)} >Editar  escuela</Button>}

                        {isEquip && <Button variant="danger" onClick={() => deletePlace(place._id)} >Eliminar  escuela</Button>}
                        {/* {isAdmin && <Button  variant="danger" onClick={()=>deletePlace(place._id)} >Eliminar  escuela</Button>} */}

                        {isAdmin && <IconButton aria-label="delete" size="large" onClick={() => deletePlace(place._id)}>
                            <DeleteIcon fontSize="inherit" />
                        </IconButton>}

                        {isLoggedIn && <Button variant="warning" onClick={() => addFavPlace(place._id)} >Añadir escuela a favoritos</Button>}

                        <Card className="bg-dark text-white" >

                            <Card.Img src={place.placeImg} alt="Card image" />

                            <Card.ImgOverlay>
                                <Link to={`/vias/${place._id}`}>
                                    <Card.Title>{place.name}</Card.Title>
                                    <Card.Text>
                                        {place.description}
                                    </Card.Text>
                                </Link>
                            </Card.ImgOverlay>

                        </Card>
                    </div>

                )
            })}

            <Modal show={showEditModal} onHide={handleEditModalClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Editar escuela de escalada</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {placeInfo && <EditPlaceForm refreshPlaces={refreshPlaces} closeModal={handleEditModalClose} place={placeInfo} />}
                </Modal.Body>
            </Modal>

        </>
    )
}

export default PlacesCard