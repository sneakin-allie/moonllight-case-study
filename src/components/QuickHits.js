import { StyledQuickHits } from "./styles/QuickHits.styled";

export default function QuickHits() {
    return (
        <StyledQuickHits>
            <div>
                <p>The start of the (real-life) season loomed large, requiring a partnership that carefully balanced features, budget, and speed.</p>
            </div>
            <div>
                <p>Our Quick Hits</p>
                <ol>
                    <li>Product Discovery
                            <ul>
                                <li>Wireframes</li>
                                <li>UX Design</li>
                            </ul>   
                    </li>
                    <li>Experience Design
                        <ul>
                            <li>Branding</li>
                            <li>Design System</li>
                            <li>UI Design</li>
                        </ul>    
                    </li>
                    <li>Development
                        <ul>
                            <li>Elixir + Phoenix</li>
                            <li>GraphQL</li>
                            <li>React</li>
                        </ul>
                    </li>
                </ol>
            </div>
        </StyledQuickHits>
    )
}