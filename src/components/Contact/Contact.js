import Container from "../UI/Container";
import Button from "../UI/Button";
const Contact = () => {
  const mailHandler = () => {
    window.location.href = "mailto:dedekurnn@outlook.com";
  }

  const linkedinHandler = () => {
    window.location.href = "https://www.linkedin.com/in/dede-kurniawan123/";
  }

  const instagramHandler = () => {
    window.location.href = "https://instagram.com/dede_kurnn";
  }

  return (
    <Container id="contact" className="container mt-1 mb-8">
      <div className="flex flex-col justify-center items-center gap-8">
        <h1 className="text-3xl font-semibold text-center">
          I'm always open for new and interesting opportunities.<br />Maybe we're a
          match?
        </h1>
        <p className="font-medium">Let's have a chat, shall we?</p>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <Button onClick={mailHandler}>dedekurnn@outlook.com</Button>
          <Button onClick={linkedinHandler}>LnkedIn</Button>
          <Button onClick={instagramHandler}>Instagram</Button>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
