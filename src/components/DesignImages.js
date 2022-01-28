import typography from "../assets/typography.jpg";
import pages from "../assets/pages.jpg";
import { StyledDesignImages } from "./styles/DesignImages.styled";

export default function DesignImages() {
    return (
        <StyledDesignImages>
            <div>
                <img src={typography} alt="design system with typography, colors, and icons" />
            </div>
            <div>
                <img src={pages} alt="pages views" />
            </div>
        </StyledDesignImages>
    )
}