import { StyledQuickHits } from "./styles/QuickHits.styled";

export default function QuickHits() {
    return (
        <StyledQuickHits>
            <h2>The start of the (real-life) season loomed large, requiring a partnership that carefully balanced features, budget, and speed.</h2>
            <ol>
                <h3>Our Quick Hits</h3> 
                <li>
                    <ul>
                        <span>Product Discovery</span>
                        <li>Wireframes</li>
                        <li>UX Design</li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <span>Experience Design</span>
                        <li>Branding</li>
                        <li>Design System</li>
                        <li>UI Design</li>
                    </ul>
                </li>
                <li>
                    <ul>
                    <span>Development</span> 
                    <li>Elixir + Phoenix</li>
                    <li>GraphQL</li>
                    <li>React</li>
                    </ul>
                </li>
            </ol>
            <svg width="1168" height="2" viewBox="0 0 1168 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="1" x2="1168" y2="1" stroke="#BDC8C8" stroke-width="2"/>
            </svg>
        </StyledQuickHits>
    )
}