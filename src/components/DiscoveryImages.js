import logo from "../assets/logo.jpg";
import icons from "../assets/icons.jpg";
import wireframes from "../assets/wireframes.jpg";
import blackwhitewires from "../assets/blackwhitewires.jpg";
import { StyledDiscoveryImages, StyledHandDrawnWires, StyledDigitalWires, StyledIcons, StyledMoonllightLogo } from "./styles/DiscoveryImages.styled";

export default function DiscoveryImages() {
    return (
        <StyledDiscoveryImages>
            <div>
                <StyledHandDrawnWires src={wireframes} alt="hand drawn wireframes" />
            </div>
            <div>
                <StyledDigitalWires src={blackwhitewires} alt="digital wireframes in black and white" />
            </div>
            <div>
                <StyledIcons src={icons} alt="examples of icons" />
                <StyledMoonllightLogo src={logo} alt="Moonllight's logo and color scale" />
            </div> 
        </StyledDiscoveryImages>
    )
}