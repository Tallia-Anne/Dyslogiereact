
import './index.css'
import logo from "../../../assets/Dyslogielogo.png";

const logoblog = () => {
    
    return (
        <section className="card-profile-blog">
            <div className="card-profile">
                <img src={logo} className="img" alt="img" width="270" />

            </div>
            <h3 >A propos</h3>
            <p> La plateforme va permet d'aider prise de note et améliorer ses notes.
                Simplifier les revision</p>
        </section>
        
)
}

export default logoblog