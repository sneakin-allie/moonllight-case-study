import themes from "../assets/themes.jpg";
import moodboard from "../assets/moodboard.jpg";
import { StyledProjectGoalsImages } from "./styles/ProjectGoalsImages.styled";

export default function ProjectGoalsImages() {
    return (
        <StyledProjectGoalsImages>
            <div>
                <img src={moodboard} alt="moodboard with screenshots of sports apps" />
            </div>
            <div>
                <img src={themes} alt="themes and motifs" />
            </div>
        </StyledProjectGoalsImages>
    )
}