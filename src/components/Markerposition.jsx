import React from "react";
import { Marker, Popup } from "react-leaflet";
import icon from "./Icon";
// import "leaflet/dist/leaflet.css"

export default function Markerposition() {
    return (
        <>
            <Marker icon={icon} position={[51.505, -0.09]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </>
    )
}