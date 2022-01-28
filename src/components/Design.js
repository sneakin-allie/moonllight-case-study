import { StyledSteps } from "./styles/Steps.styled";

export default function Design() {
    return (
        <StyledSteps>
            <header>
                <h5>03</h5>
                <h1>Design</h1>
            </header>
            <div>
                <h3>Branding</h3>
                <p>With the double-L nod to eleven players on a team, we paired Moonllight'x name with a matching wordmark and color options.</p>
                <h3>Design System</h3>
                <p>Removing most of the design-to-development handoff systems, our interface approach favored a system of reusable component states. Consequently, the front-end team was able to start in Storybook and close the loop.</p>
                <h3>Deluge of Data</h3>  
                <p>Lineups and player analyses received the bulk of visualization attention, keeping the experience both useable and useful.</p> 
            </div>    
        </StyledSteps>
    )
}