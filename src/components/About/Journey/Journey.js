import Container from "../../UI/Container";
const Journey = props => {
  return (
    <Container className={props.className}>
      <h1 className="mb-14">JOURNEY</h1>
      <div>
        <ul className="list-disc font-medium">
          <li className="mb-8">
            <h3 className="text-2xl mb-2 font-semibold">Freelance graphic designer - Fiverr</h3>
            <p>
              From my love of Minecraft, I started my career working as
              freelance graphic designer at Fiverr selling Minecraft related
              graphic.
            </p>
          </li>
          <li className="mb-8">
            <h3 className="text-2xl mb-2 font-semibold">Certified Junior Graphic Designer - VSGA 2021</h3>
            <p>
              Certified by Indonesian Ministry of Communication and Informatics
              in Junior Graphic Designer.
            </p>
          </li>
          <li className="mb-8">
            <h3 className="text-2xl mb-2 font-semibold">Google UX Design Foundation - Coursera</h3>
            <p>
              Taken Google UX Designer Foundation Course at Coursera and pass
              with 80% score.
            </p>
          </li>
          <li className="mb-8">
            <h3 className="text-2xl mb-2 font-semibold">Design Team Lead - UKM-U English Society Unila</h3>
            <p>
              Lead a team of 4 people to meet the design requirements of ESo
              Unila’s social media designs.
            </p>
          </li>
          <li className="mb-8">
            <h3 className="text-2xl mb-2 font-semibold">Working on UI/UX Design and Web Design Projects</h3>
            <p>Keep learning new things to improve my skillset.</p>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Journey;
