import AboutUsCard from "./AboutUsCard";
import { StyledAboutUs, StyledImageContainer } from "./styles/AboutUs.styled";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngTuple } from "leaflet";

const AboutUs = () => {
    const position: LatLngTuple = [50.89302149031785, 15.681996040720703]; // Lokalizacja restauracji
    return (
        <StyledAboutUs>
            <AboutUsCard />
            <StyledImageContainer>
                <img src="src/assets/images/People.jpg" alt="People" />
            </StyledImageContainer>
            <MapContainer
                center={position}
                zoom={12.2}
                style={{
                    height: "200px",
                    width: "100%",
                    borderRadius: "20px",
                }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                    <Popup>Restauracja Goduszyn </Popup>
                </Marker>
            </MapContainer>
        </StyledAboutUs>
    );
};
export default AboutUs;
