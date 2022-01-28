import { StyledSteps } from "./styles/Steps.styled";

export default function ProjectGoals() {
    return (
        <StyledSteps>
            <header>
                <h5>01</h5>
                <h1>Project Goals</h1>
            </header>
            <div>
                <h3>Friendly Competition</h3>
                <p>Player analysis, slick animations, intuitive flows...all goals paled in comparison to the pinnacle of fantasy sports: bragging rights over your friends.</p>
                <h3>Configurable Leagues</h3>
                <p>Fantasy soccer isn't new, but Moonllight's founders weren't happy with the configuration options existing platforms brought to the table. At launch, they hoped to offer choices like draft and classic alongside players from a selectable number of real-life leagues.</p>
                <h3>Subscription Base</h3>
                <p>Thinking sustainability from the outset, first phase features would need to include subscriptions, trials, and referalls.</p>
            </div>        
        </StyledSteps>
    )
}

