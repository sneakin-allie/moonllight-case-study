import { StyledExplore, TitleAndCardGrid, ExploreTitle, ProductDiscoveryCard, DevelopmentCard, CardNumberAndTitle, StyledNotesForm } from "./styles/Explore.styled";
import stickynotes from "../assets/stickynotes.jpg";
import developing from "../assets/developing.jpg";

export default function Explore() {
    return (
        <StyledExplore>
            <TitleAndCardGrid>
                <ExploreTitle>
                    <h5>EXPLORE OUR OTHER SERVICES</h5>
                </ExploreTitle>
                <ProductDiscoveryCard>
                    <img src={stickynotes} alt="brainstorming with sticky notes" />
                    <CardNumberAndTitle>
                        <div>01</div>
                        <h3>Product Discovery</h3>
                    </CardNumberAndTitle>
                    <p>Custom software is possibility. Determining what to build (and what not to build) makes or breaks the final delivery.</p>
                </ProductDiscoveryCard>
                <DevelopmentCard>
                    <img src={developing} alt="developer working at a computer" />
                    <CardNumberAndTitle>
                        <div>03</div>
                        <h3>Development</h3>
                    </CardNumberAndTitle>   
                    <p>Custom software is possibility. Determining what to build (and what not to build) makes or breaks the final delivery.</p>
                </DevelopmentCard>
            </TitleAndCardGrid> 
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
                    <button type="submit"><span>SUBMIT</span>
                        <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.29289L14.3431 0.928932C13.9526 0.538408 13.3195 0.538408 12.9289 0.928932C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM0 9L20 9V7L0 7L0 9Z" fill="#052324"/>
                        </svg>
                    </button>
                </form>
            </StyledNotesForm>
        </StyledExplore>

    )
}