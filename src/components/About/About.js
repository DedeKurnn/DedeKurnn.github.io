import DedePhoto from "../../assets/dede-photo.png";
import AboutMe from "./AboutMe/AboutMe";
import Journey from "./Journey/Journey";
import ProfilePicture from "./ProfilePicture/ProfilePicture";
import Quote from "./Quote/Quote";
import Skills from "./Skills/Skills";

const About = () => {
    return (
        <div id="about" className="grid md:grid-cols-3 container mx-auto gap-1">
            <AboutMe className="col-span-2"/>
            <ProfilePicture photo={DedePhoto}/>
            <Skills />
            <Journey className="col-span-2 row-span-2 px-16 md:px-24"/>
            <Quote className="col-span-2 md:col-span-1"/>
            
        </div>
    )
}

export default About;