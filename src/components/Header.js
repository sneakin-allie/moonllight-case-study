import { StyledHeader, Nav } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";

export default function Header() {
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <p>Insightful web applications</p>
                    <ul>
                        <li>
                            What We Do
                        </li>
                        <li>
                            Case Studies
                        </li>
                        <li>
                            About
                        </li>
                        <li>
                            Insights
                        </li>
                        <li>
                            Contact
                        </li>
                    </ul>
                </Nav>
                <h1>CASE STUDY</h1>
                <h2>Moonllight</h2>
                <p>We combined data from four international soccer leagues into one fantasy sports experience.</p>
            </Container>
        </StyledHeader>
    )
}