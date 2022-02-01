import { StyledGrayLines, StyledMotifs, StyledTestimonial } from "./styles/Testimonial.styled";

export default function Testimonial() {
    return (
        <StyledTestimonial>
            <div>
                <svg width="48" height="36" viewBox="0 0 48 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.7329 35.3292C16.6957 35.3292 20.4224 31.1553 20.4224 26.087C20.4224 20.4224 16.2484 17.5901 11.4783 17.5901C10.1366 17.5901 8.9441 17.7391 7.90062 18.0373C8.19876 10.882 12.3727 9.09318 18.6335 9.09318V0H16.9938C5.36646 0 0 9.09318 0 20.8696C0 31.1553 4.02485 35.3292 10.7329 35.3292ZM38.3106 35.3292C44.2733 35.3292 48 31.1553 48 26.087C48 20.4224 43.8261 17.5901 39.0559 17.5901C37.7143 17.5901 36.5217 17.7391 35.4783 18.0373C35.7764 10.882 39.9503 9.09318 46.2112 9.09318V0H44.5714C32.9441 0 27.5776 9.09318 27.5776 20.8696C27.5776 31.1553 31.6025 35.3292 38.3106 35.3292Z" fill="#052324"/>
                </svg>
            </div>
            <h2>Our partnership with Envy Labs is the best decision CentreLearn has ever made. Our new training system puts us years beyond the competition.</h2>
            <h5>JASON PALUCK</h5>
            <h5>FOUNDER / CENTRELEARN</h5>
        </StyledTestimonial>
    )
}

/*
import logo from "../assets/logo.jpg";
import icons from "../assets/icons.jpg";
import wireframes from "../assets/wireframes.jpg";
import blackwhitewires from "../assets/blackwhitewires.jpg";
import { StyledDiscoveryImages, StyledHandDrawnWires, StyledDigitalWires, StyledIcons, StyledMoonllightLogo } from "./styles/DiscoveryImages.styled";

export default function DiscoveryImages() {
    return (
        <StyledDiscoveryImages>
            <div>
                <StyledHandDrawnWires src={wireframes} alt="hand drawn wireframes" />
            </div>
            <div>
                <StyledDigitalWires src={blackwhitewires} alt="digital wireframes in black and white" />
            </div>
            <div>
                <StyledIcons src={icons} alt="examples of icons" />
                <StyledMoonllightLogo src={logo} alt="Moonllight's logo and color scale" />
            </div> 
        </StyledDiscoveryImages>
    )
}
*/