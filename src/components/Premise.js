import { StyledPremise, StyledTitle, StyledBody } from "./styles/Premise.styled";

export default function Premise() {
    return (
        <StyledPremise>
            <StyledTitle>
                <p>The Premise</p>
            </StyledTitle>
            <StyledBody>
                <p>
                    After suffering through quality, communication, and timeline issues with their first development partner, the team at Moonllight Manager brought Envy Labs in as an early sub.
                    They sought to create their unique take on fantasy soccer: the freedom to combine multiple European leagues, and introduce draft options.
                </p>
                <p>
                    As huge supporters of the beautiful game ourselves, we jumped at the chance to pair live data from the sport with friendly competition.
                </p>
            </StyledBody>
        </StyledPremise>
    )
}