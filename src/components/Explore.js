import { CardFlex, StyledCard, StyledExplore, StyledNotesForm } from "./styles/Explore.styled";
import stickynotes from "../assets/stickynotes.jpg";
import developing from "../assets/developing.jpg";

export default function Explore() {
    return (
        <StyledExplore>
            <h5>EXPLORE OUR OTHER SERVICES</h5>
            <CardFlex>
                <StyledCard>
                    <img src={stickynotes} alt="brainstorming with sticky notes" />
                    <h3>Product Discovery</h3>
                    <p>Custom software is possibility. Determining what to build (and what not to build) makes or breaks the final delivery.</p>
                </StyledCard>
                <StyledCard>
                    <img src={developing} alt="developer working at a computer" />
                    <h3>Development</h3>
                    <p>Custom software is possibility. Determining what to build (and what not to build) makes or breaks the final delivery.</p>
                </StyledCard>
            </CardFlex>
            <StyledNotesForm>
                <h1>Let's Compare Notes</h1>
                <p>We're always looking for a chance to talk shop. Even if we're not the right fit today, we'll be your go-to resource whenever new questions pop up.</p>
                <form>
                    <label for="firstname">First Name *</label><br/>
                    <input type="text" id="firstname" name="firstname" required></input><br/>
                    <label for="lastname">Last Name *</label><br/>
                    <input type="text" id="lastname" name="lastname" required></input><br/>
                    <label for="email">Email Address *</label><br/>
                    <input type="text" id="email" name="email" required></input><br/>
                    <label for="country">Country *</label><br/>
                    <input type="text" id="country" name="country" required></input><br/>
                    <label for="message">Message *</label><br/>
                    <textarea type="text" id="message" name="message" rows="4" required></textarea><br/>
                    <input type="submit" value="Submit"></input>
                </form>
            </StyledNotesForm>
        </StyledExplore>

    )
}