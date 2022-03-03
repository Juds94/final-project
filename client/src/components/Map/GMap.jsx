import React, { useState } from "react";
import Map from "./BoldMap/BoldMap";
import Marker from "./Marker/Marker";



export default function GMap({ place }) {
    console.log(place)
    const [placeIndex, setPlaceIndex] = useState(0);
    const [bound, setBound] = useState({});

    return (
        <div>
            <Map
                zoom={10}
                center={{ lat: place.location.coordinates[0], lng: place.location.coordinates[1] }}
                events={{ onBoundsChangerd: arg => setBound(arg) }}
            >

                <Marker
                    key={0}
                    position={{ lat: place.location.coordinates[0], lng: place.location.coordinates[1] }}
                    events={{
                    }}
                />

            </Map>
        </div>
    );
}
