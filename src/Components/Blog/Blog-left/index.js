import './index.css'

import imageXmin from "../../../assets/cartmental.jpg";
import imageWord from "../../../assets/téléchargement.png";
import imageMDPH from "../../../assets/Mdph.png";
import imageagefiph from "../../../assets/logoAgefiph.png";
import imageageOpen from "../../../assets/Open.jpg";
import { Link } from 'react-router-dom';
const Blogleft = () => {
    return (
        <section className="blog-left">

            <div className="card-blog-left">
                <div className="card-image">
                    <img src={imageXmin} className="X-min" alt="img"  />
                </div>
                <div className="text">
                    <h5>X-Mind</h5>
                    <h6>Aide</h6>
                    <p>Ce logiciel va permet de réalisation
                        d'une carte mentale pour mieux apprendre les cours.
                        Et mieux organiser votre travail </p>
                    <Link to="/blogdetails" className="btn">Lire plus</Link>
                </div>
            </div>

            {/* <!--------  section_card   -----------> */}
            <div className="featured-blog">
                <div className="container-blog-left">


                    <div className="cards-left">
                        <div className="card-left">
                            <div className="top-card-left">
                                <img src={imageWord} className="WordQ" alt="img" />
                            </div>
                            <div className="bottom-card">
                                <div className="top-btn">Categorie
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, voluptates.</p>
                                    <a href="bg.details1.html" className="btn-sav">
                                        En savoir plus
                                    </a>
                                </div>

                            </div>
                        </div>

                        <div className="card-left">
                            <div className="top-card-left">
                                <img src={imageWord} className="WordQ" alt="img" />
                            </div>
                            <div className="bottom-card-left">
                                <div className="top-btn">MDPH
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, voluptates.</p>
                                    <a href="bg.details1.html" className="btn-sav">
                                        En savoir plus
                                    </a>
                                </div>

                            </div>
                        </div>

                        <div className="card-left">
                            <div className="top-card-left">
                                <img src={imageMDPH} className="MDPH" alt="img" />
                            </div>
                            <div className="bottom-card-left">
                                <div className="top-btn">Categorie
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, voluptates.</p>
                                    <a href="bg.details1.html" className="btn-sav">
                                        En savoir plus
                                    </a>
                                </div>

                            </div>
                        </div>

                        <div className="card-left">
                            <div className="top-card-left">
                                <img src={imageagefiph} className="MDPH" alt="img" />
                            </div>
                            <div className="bottom-card-left">
                                <div className="top-btn"><h5>Agefiph</h5>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, voluptates.</p>
                                    <a href="bg.details1.html" className="btn-sav">
                                        En savoir plus
                                    </a>
                                </div>

                            </div>
                        </div>

                        <div className="card-left">
                            <div className="top-card-left">
                                <img src={imageageOpen} className="MDPH" alt="img" />
                            </div>
                            <div className="bottom-card-left">
                                <div className="top-btn">OpenDyslexic
                                    <p>OpenDyslexic est une police d'écriture open source ...</p>
                                    <a href="bg.details1.html" className="btn-sav">
                                        En savoir plus
                                    </a>
                                </div>

                            </div>
                        </div>

                       
                    </div>

                </div>
            </div>
           

        </section>
)
    
}

export default Blogleft