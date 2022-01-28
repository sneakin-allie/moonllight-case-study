import { StyledQuickHits } from "./styles/QuickHits.styled";

export default function QuickHits() {
    return (
        <StyledQuickHits>
            <h2>The start of the (real-life) season loomed large, requiring a partnership that carefully balanced features, budget, and speed.</h2>
            <h3>Our Quick Hits</h3>
                <h5>01</h5>
                <div>
                    <header>Product Discovery</header>
                    <p>Wireframes</p>
                    <p>UX Design</p>
                </div>
                <h5>02</h5>
                <div>
                    <header>Experience Design</header>
                    <p>Branding</p>
                    <p>Design System</p>
                    <p>UI Design</p>
                </div>
                <h5>03</h5>
                <div>
                    <header>Development</header> 
                    <p>Elixir + Phoenix</p>
                    <p>GraphQL</p>
                    <p>React</p>
                </div>
        </StyledQuickHits>
    )
}