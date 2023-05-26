import Label from "../UI/Label";
import Container from "../UI/Container";
import Card from "../UI/Card";
import image1 from "../../assets/Unila_Web_Redesign.png";
import image2 from "../../assets/susterku.png";
import image3 from "../../assets/butterfly.png";
import image4 from "../../assets/sakai-sambayan.png";

const Projects = () => {
  const projectList = [
    {
      id: "1",
      img: image2,
      alt: "Project 2",
      link: "https://www.behance.net/gallery/159393015/UIUX-Design-Portfolio-2022",
      title: "SusterKu - UI/UX Case Study",
    },
    {
      id: "2",
      img: image3,
      alt: "Project 3",
      link: "#",
      title: "Honkai Star Rail Landing Page - UI Exploration",
    },
    {
      id: "3",
      img: image4,
      alt: "Project 4",
      link: "#",
      title: "Sakai Sambayan - UI Exploration",
    },
  ];

  return (
    <Container id="projects" className="container mt-1">
      <h1 className="mb-14">PROJECTS</h1>
      <div
        id="featured-project"
        className="md:flex md:flex-row-reverse gap-8 items-center border-b-2 pb-12"
      >
        <div className="md:w-[60%] rounded-3xl shadow-xl border-2 overflow-hidden group relative">
          <div className="absolute top-0 left-0 -translate-x-full w-full h-full bg-gradient-to-r from-transparent via-white to-transparent group-hover:translate-x-full mix-blend-overlay transition-all duration-1000"></div>
          <img
            src={image1}
            alt="Unila Web Redesign"
            className="rounded-3xl"
          />
        </div>
        <div className="md:w-[40%] mt-8 md:mt-0">
          <Label>FeaturedProjects</Label>
          <h2 className="text-4xl font-semibold mb-8">
            Lampung University Website Redesign
          </h2>
          <p className="mb-8">
            This website is developed as final exam project for Web Programming
            course at Informatics Engineering department of Lampung University.
            You can read the case study and live demo of the project by clicking
            the link below.
          </p>
          <span className="block dark:text-white dark:opacity-75">
            <a
              href="#"
              className="font-semibold opacity-60 hover:opacity-100 hover:text-primary-darker underline"
            >
              Read more
            </a>{" "}
            or{" "}
            <a
              href="https://dedekurnn.me/web-unila/public/index.html"
              className="font-semibold opacity-60 hover:opacity-100 hover:text-primary-darker underline"
            >
              visit live website
            </a>
          </span>
        </div>
      </div>
      <div
        id="recent-projects"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-12"
      >
        {projectList.map((project) => {
          return (
            <Card
              key={project.id}
              img={project.img}
              alt={project.alt}
              link={project.link}
              title={project.title}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default Projects;
