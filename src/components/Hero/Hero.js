import Button from "../UI/Button";
import Label from "../UI/Label";
import Container from "../UI/Container";
import HeroImages from "./HeroImages";

const Hero = () => {
  const downloadCVHandler = () => {
    window.location.href =
      "https://drive.google.com/file/d/1QniIkWH_1HPRwEIJNzCQt4TZbiCqLBw1/view?usp=share_link";
  };

  const tagline1 = "DESIGN";
  const tagline2 = "DEVELOP";
  const tagline3 = "DEPLOY";
  return (
    <Container
      id="hero"
      className="container flex flex-wrap flex-col-reverse md:flex-row mt-1 items-center justify-center"
    >
      <div className="w-full md:w-3/5">
        <Label>DedePortfolio</Label>
        <h1 className="text-7xl lg:text-8xl leading-none font-plusJakarta font-bold mb-8">
          <span className="block">
            {tagline1.split("").map((char, index) => {
              return <span key={char + "-" + index} className="hover:text-primary-darker transition-all duration-300">{char}</span>;
            })}
          </span>
          <span className="block">
            {tagline2.split("").map((char, index) => {
              return <span key={char + "-" + index} className="hover:text-primary-darker transition-all duration-300">{char}</span>;
            })}
          </span>
          <span className="block">
            {tagline3.split("").map((char, index) => {
              return <span key={char + "-" + index} className="hover:text-primary-darker transition-all duration-300">{char}</span>;
            })}
          </span>
        </h1>
        <p className="font-medium mb-8 w-full md:w-2/3">
          4th Semester Informatics Engineering student at Universitas Lampung.
          Passionate in{" "}
          <span className="font-semibold">software engineering</span> and{" "}
          <span className="font-semibold">UI/UX design.</span>
        </p>
        <Button onClick={downloadCVHandler}>Download CV</Button>
      </div>
      <HeroImages className="w-full md:w-2/5" />
    </Container>
  );
};

export default Hero;
