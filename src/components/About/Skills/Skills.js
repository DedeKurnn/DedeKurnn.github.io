import Container from "../../UI/Container";
import {Adobephotoshop, Figma, Typescript} from "@styled-icons/simple-icons";
import {Invision, Css3, Html5, ReactLogo, Javascript, TailwindCss} from "@styled-icons/boxicons-logos";

const Skills = props => {
    return (
        <Container className="grid grid-cols-3 grid-rows-3 gap-8 md:gap-12 w-full mx-auto dark:text-primary-darker">
            <Adobephotoshop className="w-full max-w-[56px] h-full object-contain mx-auto scale-[.85] hover:text-secondary-darker"/>
            <Figma className="w-full max-w-[56px] h-full object-contain mx-auto scale-[.80] hover:text-secondary-darker"/>
            <Invision className="w-full max-w-[56px] h-full object-contain mx-auto hover:text-secondary-darker"/>
            <Html5 className="w-full max-w-[56px] h-full object-contain mx-auto hover:text-secondary-darker"/>
            <Css3 className="w-full max-w-[56px] h-full object-contain mx-auto hover:text-secondary-darker"/>
            <Javascript className="w-full max-w-[56px] h-full object-contain mx-auto hover:text-secondary-darker"/>
            <Typescript className="w-full max-w-[56px] h-full object-contain mx-auto scale-[.80] hover:text-secondary-darker"/>
            <ReactLogo className="w-full max-w-[56px] h-full object-contain mx-auto hover:text-secondary-darker"/>
            <TailwindCss className="w-full max-w-[56px] h-full object-contain mx-auto hover:text-secondary-darker"/>
        </Container>
    )
}

export default Skills;