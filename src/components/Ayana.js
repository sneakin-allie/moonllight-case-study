import ayana from "../assets/ayana.jpg";
import { StyledAyana } from "./styles/Ayana.styled";

export default function Ayana() {
    return (
        <StyledAyana>
            <img src={ayana} alt="Envy Lab's designer working at a computer" />
        </StyledAyana>
    )
}