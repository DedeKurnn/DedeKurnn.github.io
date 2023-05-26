import Container from "../../UI/Container";
import Label from "../../UI/Label";

const Quote = props => {
    return (
        <Container className={`bg-gradient-to-t from-secondary-darker to-secondary-lighter flex flex-col items-center justify-center ${props.className}`}>
            <div>
                <blockquote className="text-3xl md:text-4xl font-semibold mb-4">“You don’t learn to walk by following rules. You learn by doing, and by falling over” </blockquote>
                <Label>Richard Branson</Label>
            </div>
        </Container>
    )
}

export default Quote;