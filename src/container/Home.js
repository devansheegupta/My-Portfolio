
import Navigation from "../components/Navigation";
import About from "./About";
import Skills from "./Skills";
import Works from "./Works";
import Education from "./Education";
import Projects from "./Projects";
import Achieve from "./Achieve";
import Contact from "./Contact";

function Home() {
    return(
        <div>

            <div>
                <Navigation/>
                <About/>
                <Skills/>
                <Education/>
                <Works/>
                <Projects/>
                <Achieve/>
                <Contact/>
            </div>

        </div>
    )
}
export default Home;