import heroImage from "../assets/heroImage.jpg";
import { StyledHeroImage } from "./styles/HeroImage.styled";

export default function HeroImage() {
    return (
        <StyledHeroImage>
            <img src={heroImage} alt="Moonllight screen shots" />
        </StyledHeroImage>
    )
}