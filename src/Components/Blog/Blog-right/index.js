import './index.css'
import Logoblog from '../logoblog';
import Lien from '../Liens';
import Postes from '../Postes';
import Tags from '../Tags';
const Blogright = () => {
    return (
        <section className="blog-right">
            <Logoblog />
            <Lien />
            <Postes />
            <Tags/>
            
        </section>
)
}

export default Blogright