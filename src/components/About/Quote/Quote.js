import Container from "../../UI/Container";
import Label from "../../UI/Label";

const Quote = props => {
    return (
        <Container className={`bg-gradient-to-t from-secondary-darker to-secondary-lighter dark:from-[#621A03] dark:to-[#584F00] flex flex-col items-center justify-center ${props.className}`}>
            <div>
                <blockquote className="text-3xl md:text-4xl dark:text-white dark:opacity-80 font-semibold mb-4">“You don’t learn to walk by following rules. You learn by doing, and by falling over” </blockquote>
                <Label>Richard Branson</Label>
            </div>
        </Container>
    )
}

export default Quote;