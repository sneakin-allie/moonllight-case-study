import logo from "../assets/logo.jpg";
import icons from "../assets/icons.jpg";
import wireframes from "../assets/wireframes.jpg";
import blackwhitewires from "../assets/blackwhitewires.jpg";
import { StyledDiscoveryImages, StyledHandDrawnWires, StyledDigitalWires, StyledIcons, StyledMoonllightLogo } from "./styles/DiscoveryImages.styled";

export default function DiscoveryImages() {
    return (
        <StyledDiscoveryImages>
            <StyledHandDrawnWires>
                <img src={wireframes} alt="hand drawn wireframes" />
            </StyledHandDrawnWires>
            <StyledDigitalWires>
                <img src={blackwhitewires} alt="digital wireframes in black and white" />
            </StyledDigitalWires>
            <div>
                <StyledIcons>
                    <img src={icons} alt="examples of icons" />
                </StyledIcons>
                <StyledMoonllightLogo>
                    <img src={logo} alt="Moonllight's logo and color scale" />
                </StyledMoonllightLogo>
            </div> 
        </StyledDiscoveryImages>
    )
}