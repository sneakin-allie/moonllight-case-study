import logo from "../assets/logo.jpg";
import icons from "../assets/icons.jpg";
import wireframes from "../assets/wireframes.jpg";
import blackwhitewires from "../assets/blackwhitewires.jpg";
import { StyledDiscoveryImages } from "./styles/DiscoveryImages.styled";

export default function DiscoveryImages() {
    return (
        <StyledDiscoveryImages>
            <div>
                <img src={wireframes} alt="hand drawn wireframes" />
            </div>
            <div>
                <img src={blackwhitewires} alt="digital wireframes in black and white" />
            </div>
            <div>
                <img src={icons} alt="examples of icons" />
                <img src={logo} alt="Moonllight's logo and color scale" />
            </div>
        </StyledDiscoveryImages>
    )
}