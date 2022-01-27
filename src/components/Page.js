import React from "react";
import heroImage from "../assets/heroImage.jpg";
import { StyledPage } from "./styles/Page.styled";

export default function Page() {
    return (
        <StyledPage>
            <header>
                <nav>
                    <div>
                        <img src="" alt="Envy labs logo" />
                    </div>
                    <div>
                        <p>What We Do</p>
                        <p>Case Studies</p>
                        <p>About</p>
                        <p>Insights</p>
                        <p>Contact</p>
                    </div>
                </nav>
                <div>
                    <h5>CASE STUDY</h5>
                    <p>Moonllight</p>
                    <p className="subheading2">We combined data from four international soccer leagues into one fantasy sports experience.</p>
                </div>
                <div>
                    <img src={heroImage} alt="hero" />
                </div>
            </header>
            <main>
                <section className="premise">
                    <p className="*">The Premise</p>
                    <p className="subheading2">After suffering through quality, communication, and timeline issues with their first development partner, the team at Moonllight Manager brought Envy Labs in as an early sub. They sought to create their unique take on fantasy soccer: the freedom to combine multiple European leagues, and introduce draft options.</p>
                    <p className="subheading2">As huge supporters of the beautiful game ourselves, we jumped at the chance to pair live data from the sport with friendly competition.</p>
                </section>
                <div>
                    <img alt="Ayana designing"/>
                </div>
                <section className="quick-hits">
                    <div>
                        <h2>The start of the (real-life) season loomed large, requiring a partnership that carefully balanced features, budget, and speed.</h2>
                    </div>
                    <div>
                        <h3>Our Quick Hits</h3>
                            <p className="subheading2">Product Discovery</p>
                            <p className="body">Wireframes</p>
                            <p className="body">UX Design</p>
                            <p className="subheading2">Experience Design</p>
                            <p className="body">Branding</p>
                            <p className="body">Design System</p>
                            <p className="body">UI Design</p>
                            <p className="subheading2">Development</p> 
                            <p className="body">Elixir + Phoenix</p>
                            <p className="body">GraphQL</p>
                            <p className="body">React</p>
                    </div>   
                </section>
                <section className="project-goals">
                    <h1>Project Goals</h1>
                    <h3>Friendly Competition</h3>
                        <p className="body">Player analysis, slick animations, intuitive flows...all goals paled in comparison to the pinnacle of fantasy sports: bragging rights over your friends.</p>
                    <h3>Configurable Leagues</h3>
                        <p className="body">Fantasy soccer isn't new, but Moonllight's founders weren't happy with the configuration options existing platforms brought to the table. At launch, they hoped to offer choices like draft and classic alongside players from a selectable number of real-life leagues.</p>
                    <h3>Subscription Base</h3>
                        <p className="body">Thinking sustainability from the outset, first phase features would need to include subscriptions, trials, and referalls.</p>
                </section>
                <div className="project-goals-images">
                    <div>
                        <img alt="mockups" />
                    </div>
                    <div>
                        <img alt="moodboard" />
                    </div>
                </div>
                <section className="discovery">
                    <h1>Discovery</h1>
                    <h3>Man Management</h3>
                        <p className="body">Sketches, re-sketches, and wireframes ruled the discover process as we worked to define an experience that combined lineups, stats, and more tables than you could shake a corner flag at.</p>
                    <h3>Achievable Scope</h3>
                        <p className="body">With a hard start-of-season deadline on one side and endless ideas on the other, we worked closely with the Moonllight team to keep a manageable wishlist.</p>
                    <h3>Scoring Tune Ups</h3>
                        <p className="body">Choosing point values for player actions is no small feat. Early in the process, we added a simplified player selection took, allowing the client to check their numbers against performances in the previous season.</p>
                </section>
                <div className="discovery-images">
                    <div>
                        <img alt="hand drawn wireframes" />
                    </div>
                    <div>
                        <img alt="digital wireframes" />
                    </div>
                    <div>
                        <div>
                            <img alt="icons" />
                        </div>
                        <div>
                            <img alt="logo and colors" />
                        </div>
                    </div>
                </div>
                <section className="design">
                    <h1>Design</h1>
                    <h3>Branding</h3>
                        <p className="body">With the double-L nod to eleven players on a team, we paired Moonllight'x name with a matching wordmark and color options.</p>
                    <h3>Design System</h3>
                        <p className="body">Removing most of the design-to-development handoff systems, our interface approach favored a system of reusable component states. Consequently, the front-end team was able to start in Storybook and close the loop.</p>
                    <h3>Deluge of Data</h3>  
                        <p className="body">Lineups and player analyses received the bulk of visualization attention, keeping the experience both useable and useful.</p>   
                </section>
                <div className="design-images">
                    <div>
                        <img alt="typography and colors" />
                    </div>
                    <div>
                        <img alt="wireframes with color"/>
                    </div>
                </div>
                <section className="develop">
                    <h1>Develop</h1>
                    <h3>All Devices Welcome</h3>
                        <p className="body">The shifting nature of soccer lineups - and midweek games - meant that users needed approach to their team from any device. Taking it further, even complex interfaces like live drafts scaled seamlessly to the device on (or in) hand.</p>
                    <h3>Here and Now</h3>
                        <p className="body">Competition waits for no one stats crunching. As real-world games played out, numbers across applications updated in tandem.</p>
                    <h3>Stripe Subscriptions</h3>
                        <p className="body">Making use of Stripe's subscription functionality, the fledgling business had customers from launch. Free trials and referall bonuses helped in encouraging new users.</p>
                </section>
                <div>
                    <img alt="developer at a computer" />
                </div>
                <section className="results">
                    <h1>The Results</h1>
                    <h2>As Liverpool and Norwich City kick off to start the Premier League season, competition across Moonllight leagues began as well.</h2>
                </section>
                <section className="testimonial">
                    <h2>Our partnership with Envy Labs is the best decision CentreLearn has ever made. Our new training system puts us years beyond the competition.</h2>
                    <h5>JASON PALUCK</h5>
                    <h5>FOUNDER / CENTRELEARN</h5>
                </section>
                <section className="other-services">
                    <div>
                        <h5>EXPLORE OUR OTHER SERVICES</h5>
                        <div>
                            <div>
                                <img alt="brainstorming with post-it notes"/>
                                <h3>Product Discovery</h3>
                                <p className="body">Custom software is possibility. Determining what to build (and what not to build) makes or breaks the final delivery.</p>
                            </div>
                            <div>
                                <img alt="developer at a computer"/>
                                <h3>Development</h3>
                                <p className="body">Custom software is possibility. Determining what to build (and what not to build) makes or breaks the final delivery.</p>
                            </div>
                        </div>
                    </div>
                    <div className="compare-notes">
                        <h1>Let's Compare Notes</h1>
                        <p className="body">We're always looking for a chance to talk shop. Even if we're not the right fit today, we'll be your go-to resource whenever new questions pop up.</p>
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
                    </div>
                </section>
            </main>
            <footer>
                <div>
                    <div>
                        <p><em>Practical</em> App<em>lications</em></p>
                    </div>
                    <div>
                        <div>
                            <h6>Navigate</h6>
                            <ul>
                                <li>What We Do</li>
                                <li>Case Studies</li>
                                <li>About</li>
                                <li>Insights</li>
                                <li>Contact</li>
                                <li>Privacy</li>
                            </ul>
                        </div>
                        <div>
                            <h6>Explore</h6>
                            <ul>
                                <li>Twitter</li>
                                <li>Dribbble</li>
                                <li>GitHub</li>
                                <li>Instagram</li>
                                <li>LinkedIn</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <img alt="logo" />
                    </div>
                    <div>
                        <h6>GET IN TOUCH</h6>
                        <p>hello@envylabs.com</p>
                        <p>884.310.0257</p>
                    </div>
                </div>
            </footer>
        </StyledPage>
    )
}