import { Badge, ListGroup, Button } from "react-bootstrap"
import { AuthContext } from "../../context/auth.context"
import { useContext } from "react"
import userService from "../../services/user.service"
import pitchesService from "../../services/pitches.service"
import { useState } from "react"

const ListItem = ({ placeDetails, refreshPitches }) => {
    
const [isWished, setIsWished] = useState(false)
const {isLoggedIn, isAdmin, isEquip} = useContext(AuthContext)

const addWishPitch = (pitch_id) =>{
    userService
        .addWishPitches(pitch_id)
        .then(()=> {
            setIsWished(true)
        })
        .catch(err => console.log(err))    
}

const addDonePitch = (pitch_id) =>{
    userService
        .addDonePitches(pitch_id)
        .then(()=> {
            setIsWished(true)
        })
        .catch(err => console.log(err))    
}

const deletePitch = (pitch_id) => {
    pitchesService
        .deletePitch(pitch_id)
        .then(() => {
            refreshPitches()
        })
}


    return (
        placeDetails ?
            <>
                <h1>Todas las vias de:{placeDetails.name}</h1>

                <ListGroup as="ol" numbered>

                    {placeDetails.pitch?.map(elm => {

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
                                {/* {isEquip && <Button onClick={()=> editPitch(elm._id)} variant="warning" >Eliminar vía</Button>} */}
                                {isAdmin && <Button onClick={()=> deletePitch(elm._id)} variant="warning" >Eliminar vía</Button>}
                                {isLoggedIn && <Button onClick={()=> addDonePitch(elm._id)} variant="warning" >Vía encadenada</Button>}
                                {isLoggedIn && <Button onClick={()=> addWishPitch(elm._id)} variant="warning" >Añadir a vía a proyectos</Button>}
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