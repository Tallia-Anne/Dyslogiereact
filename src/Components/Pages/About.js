import Header from "../Header";
import Aboutheader from "../About/About_header";
import AboutvaleurSection from "../About/AboutvaleurSection";
import Sectionlistabout from "../About/Sectionlistabout";
import Sectiontemoin from "../About/Sectiontemoin";
const About = () => {
      return(
            <div className="about">
            <Header/>
            <Aboutheader />
            <AboutvaleurSection /> 
            <Sectiontemoin/>
            <Sectionlistabout/>
            </div>
      )
}

export default About;