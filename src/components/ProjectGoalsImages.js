import themes from "../assets/themes.jpg";
import moodboard from "../assets/moodboard.jpg";
import { StyledProjectGoalsImages, StyledImageOne, StyledImageTwo } from "./styles/ProjectGoalsImages.styled";

export default function ProjectGoalsImages() {
    return (
        <StyledProjectGoalsImages>
            <StyledImageOne src={moodboard} alt="moodboard with screenshots of sports apps" />
            <StyledImageTwo src={themes} alt="themes and motifs" />
        </StyledProjectGoalsImages>
    )
}