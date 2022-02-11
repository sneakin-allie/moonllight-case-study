import typography from "../assets/typography.jpg";
import pages from "../assets/pages.jpg";
import { StyledDesignImages, StyledTypographyImg, StyledWireframeImg } from "./styles/DesignImages.styled";

export default function DesignImages() {
    return (
        <StyledDesignImages>
            <StyledTypographyImg>
                <img src={typography} alt="design system with typography, colors, and icons" />
            </StyledTypographyImg>
            <StyledWireframeImg>
                <img src={pages} alt="pages views" />
            </StyledWireframeImg>
        </StyledDesignImages>
    )
}