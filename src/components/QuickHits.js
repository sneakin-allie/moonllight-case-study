import { StyledList, StyledPara, StyledQuickHits } from "./styles/QuickHits.styled";

export default function QuickHits() {
    return (
        <StyledQuickHits>
            <StyledPara>
                <h2>The start of the (real-life) season loomed large, requiring a partnership that carefully balanced features, budget, and speed.</h2>
            </StyledPara>
            <StyledList>
                <h3>Our Quick Hits</h3>
                <ol> 
                    <li>
                        <ul>
                            <li>Product Discovery</li>
                            <li>Wireframes</li>
                            <li>UX Design</li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li>Experience Design</li>
                            <li>Branding</li>
                            <li>Design System</li>
                            <li>UI Design</li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li>Development</li> 
                            <li>Elixir + Phoenix</li>
                            <li>GraphQL</li>
                            <li>React</li>
                        </ul>
                    </li>
                </ol>
            </StyledList>
        </StyledQuickHits>
    )
}