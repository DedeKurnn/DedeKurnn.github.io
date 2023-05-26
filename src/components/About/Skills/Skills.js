import Container from "../../UI/Container";
import {Adobephotoshop, Figma, Typescript} from "@styled-icons/simple-icons";
import {Invision, Css3, Html5, ReactLogo, Javascript, TailwindCss} from "@styled-icons/boxicons-logos";

const Skills = props => {
    return (
        <Container className="grid grid-cols-3 grid-rows-3 gap-8 md:gap-12 w-full mx-auto">
            <Adobephotoshop className="w-full max-w-[56px] h-full object-contain mx-auto"/>
            <Figma className="w-full max-w-[56px] h-full object-contain mx-auto"/>
            <Invision className="w-full max-w-[56px] h-full object-contain mx-auto"/>
            <Html5 className="w-full max-w-[56px] h-full object-contain mx-auto"/>
            <Css3 className="w-full max-w-[56px] h-full object-contain mx-auto"/>
            <Javascript className="w-full max-w-[56px] h-full object-contain mx-auto"/>
            <Typescript className="w-full max-w-[56px] h-full object-contain mx-auto"/>
            <ReactLogo className="w-full max-w-[56px] h-full object-contain mx-auto"/>
            <TailwindCss className="w-full max-w-[56px] h-full object-contain mx-auto"/>
        </Container>
    )
}

export default Skills;