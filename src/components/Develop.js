import { StyledContent, StyledNum, StyledSteps } from "./styles/Steps.styled";

export default function Develop() {
    return (
        <StyledSteps>
            <StyledNum>
                <h5>04</h5>
                <h1>Develop</h1>
            </StyledNum>
            <StyledContent>
                <h3>All Devices Welcome</h3>
                <p>The shifting nature of soccer lineups - and midweek games - meant that users needed approach to their team from any device. Taking it further, even complex interfaces like live drafts scaled seamlessly to the device on (or in) hand.</p>
                <h3>Here and Now</h3>
                <p>Competition waits for no one stats crunching. As real-world games played out, numbers across applications updated in tandem.</p>
                <h3>Stripe Subscriptions</h3>
                <p >Making use of Stripe's subscription functionality, the fledgling business had customers from launch. Free trials and referall bonuses helped in encouraging new users.</p>
            </StyledContent>        
        </StyledSteps>
    )
}