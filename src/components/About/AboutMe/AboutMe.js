import Container from "../../UI/Container";
import Label from "../../UI/Label";
import {
  Linkedin,
  Behance,
  Instagram,
  Github,
  Dribbble,
} from "@styled-icons/boxicons-logos";

const AboutMe = (props) => {
  return (
    <Container
      className={`mt-1 flex flex-col justify-center ${props.className}`}
    >
      <div>
        <div>
          <Label>AboutMe</Label>
          <h1 className="mb-8">HI! IT'S DEDE</h1>
          <p className="font-medium">
            I’m a second year Informatics Engineering student in Lampung
            University. I love creating things that did not exist into
            existence. I love design, build, and deploy. Read more about me or
            ask me anything.
          </p>
        </div>
        <div className="flex items-center flex-wrap justify-start gap-4 mt-8">
          <a href="https://behance.net/dedekurnn">
            <Behance className="w-full max-w-[42px] h-full object-contain" />
          </a>
          <a href="https://dribbble.com/DaikyKurn">
            <Dribbble className="w-full max-w-[42px] h-full object-contain" />
          </a>
          <a href="https://github.com/dedekurnn">
            <Github className="w-full max-w-[42px] h-full object-contain" />
          </a>
          <a href="https://instagram.com/dede_kurnn">
            <Instagram className="w-full max-w-[42px] h-full object-contain" />
          </a>
          <a href="https://linkedin.com/in/dede-kurniawan-123">
            <Linkedin className="w-full max-w-[42px] h-full object-contain" />
          </a>
        </div>
      </div>
    </Container>
  );
};

export default AboutMe;
