import L from 'leaflet'
import icon from '../assets/icon.png'


export default L.icon({
    iconSize: [55, 75],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    iconUrl: icon
})