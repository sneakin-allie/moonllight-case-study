import { StyledQuote, TestimonialGrid, ThreeSquares, WhiteLines, WhiteSquares } from "./styles/Testimonial.styled";

export default function Testimonial() {
    return (
        <TestimonialGrid>
            <WhiteLines>
                <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="128" width="128" height="15.7538" transform="rotate(-90 0 128)" fill="white"/>
                    <rect x="28" y="128" width="128" height="15.7538" transform="rotate(-90 28 128)" fill="white"/>
                    <rect x="56" y="128" width="128" height="15.7538" transform="rotate(-90 56 128)" fill="white"/>
                    <rect x="112" y="128" width="128" height="15.7538" transform="rotate(-90 112 128)" fill="white"/>
                    <rect x="84" y="128" width="128" height="15.7538" transform="rotate(-90 84 128)" fill="white"/>
                </svg>
            </WhiteLines>
            <ThreeSquares>
                <svg width="33" height="49" viewBox="0 0 33 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="16" height="16" transform="matrix(-8.85319e-08 -1 -1 8.85319e-08 33 49)" fill="#7EE8B9"/>
                    <rect width="16" height="16" transform="matrix(-8.85319e-08 -1 -1 8.85319e-08 17 17)" stroke="#7B9291"/>
                    <rect width="16" height="16" transform="matrix(-8.85319e-08 -1 -1 8.85319e-08 17 33)" stroke="#7B9291"/>
                </svg>
            </ThreeSquares>
            <StyledQuote>
                <div>
                    <svg width="48" height="36" viewBox="0 0 48 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.7329 35.3292C16.6957 35.3292 20.4224 31.1553 20.4224 26.087C20.4224 20.4224 16.2484 17.5901 11.4783 17.5901C10.1366 17.5901 8.9441 17.7391 7.90062 18.0373C8.19876 10.882 12.3727 9.09318 18.6335 9.09318V0H16.9938C5.36646 0 0 9.09318 0 20.8696C0 31.1553 4.02485 35.3292 10.7329 35.3292ZM38.3106 35.3292C44.2733 35.3292 48 31.1553 48 26.087C48 20.4224 43.8261 17.5901 39.0559 17.5901C37.7143 17.5901 36.5217 17.7391 35.4783 18.0373C35.7764 10.882 39.9503 9.09318 46.2112 9.09318V0H44.5714C32.9441 0 27.5776 9.09318 27.5776 20.8696C27.5776 31.1553 31.6025 35.3292 38.3106 35.3292Z" fill="#052324"/>
                    </svg>
                </div>
                <h2>Our partnership with Envy Labs is the best decision CentreLearn has ever made. Our new training system puts us years beyond the competition.</h2>
                <h5>JASON PALUCK</h5>
                <h5>FOUNDER / CENTRELEARN</h5>
            </StyledQuote>
            <WhiteSquares>
                <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="42.6667" height="42.6667" fill="white"/>
                    <rect y="85.333" width="42.6667" height="42.6667" fill="white"/>
                    <rect x="42.6667" y="42.667" width="42.6667" height="42.6667" fill="white"/>
                    <rect x="85.3333" width="42.6667" height="42.6667" fill="white"/>
                    <rect x="85.3333" y="85.333" width="42.6667" height="42.6667" fill="white"/>
                </svg>
            </WhiteSquares>
        </TestimonialGrid>
    )
}