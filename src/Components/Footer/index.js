import './index.css'
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer>
            {/* <!-- Footer main --> */}
            <section className="ft-main">
                <div className="ft-main-item">
                    <h2 className="ft-title">About</h2>
                    <ul>
                        <li>La plateforme va permet d'aider    les personnes mieux apprendre les cours</li>


                </ul>
            </div>
            <div className="ft-main-item">
                <h2 className="ft-title">Resources</h2>
                <ul>

                        <li> <Link to="/about"> A propos </Link></li>
                        <li> <Link to="/galerie" > Gallerie</Link></li>
                    <li>Aides</li>

                </ul>
            </div>
            <div className="ft-main-item">
                <h2 className="ft-title">Contact</h2>
                <ul>
                    <li>Help</li>
                    <li>FAQ</li>

                </ul>
            </div>
            <div className="ft-main-item">
                <h2 className="ft-title">Newsletter</h2>
                <p>Suivez les actualités </p>
                <form>
                    <input type="email" name="email" placeholder="Entrer votre adresse email"/>
                        <input type="submit" value="Subscribe"/>
                        </form>
                    </div>
                </section>

                {/* <!-- Footer social --> */}
                <section className="ft-social">
                    <ul className="ft-social-list">
                        <li><i className="fab fa-facebook"></i></li>
                        <li><i className="fab fa-instagram"></i></li>
                        <li><i className="fab fa-github"></i></li>
                        <li><i className="fab fa-linkedin"></i></li>
                    </ul>
                </section>

                {/* <!-- Footer legal --> */}
                <section className="ft-legal">
                    <ul className="ft-legal-list">
                        <li>&copy; 2022 Copyright Wambiekele Kiyeko Tallia-Anne</li>
                    </ul>
                </section>
        </footer>
)
}
export default Footer;