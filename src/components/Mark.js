import mark from "../assets/mark.jpg";
import { StyledMark } from "./styles/Mark.styled";

export default function Mark() {
    return (
        <StyledMark>
            <img src={mark} alt="Envy Lab's developer Mark working at a computer" />
        </StyledMark>
    )
}