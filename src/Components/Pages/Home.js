import Header from '../Header'
import Hero from '../../Components/Acceuil/Hero'
import SectionIntro from '../Acceuil/SectionIntro';
import SectionParallaxe1 from '../Acceuil/SectionParallaxe1';
import SectionService from '../Acceuil/SectionService';
import SectionCategorie from '../Acceuil/SectionCategorie';
import SectionGallerie from '../Acceuil/SectionGallerie';
import SectionCitation from '../Acceuil/SectionCitation';
import SectionBlog from '../SectionBlog';
import SectionParallaxe2 from '../Acceuil/SectionParallaxe2';
import SectionCategorie2 from '../Acceuil/SectionCategorie2';

const Home = () => {
    return (
        <div className="home">
            <Header />
            <Hero />
            <SectionIntro />
            <SectionParallaxe1 />
            <SectionService />
            <SectionCategorie />
            <SectionGallerie />
            <SectionCitation />
            <SectionBlog />
            <SectionParallaxe2 />
            <SectionCategorie2 />
        </div>
)
}

export default Home