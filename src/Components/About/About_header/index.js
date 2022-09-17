// CSS
import './index.css'
//Image
import imageabout from "../../../assets/about.jpg";
//Les liens
import { Link } from "react-router-dom";
const Aboutheader = () => {
      return(
    <section className="sec-header">
    <div className="col col-1 ">
    <div className="box">
    <h3>Nous découvrir</h3>
    <h2>La plateforme Dsylogie</h2>
          <p> Dans près de 40% des cas, un enfant concerné par un trouble spécifique des apprentissages présente plusieurs troubles.
        Les troubles spécifiques des apprentissages avec déficit en lecture 
      ou avec déficit du calcul sont fréquemment associés à des troubles développementaux de  la coordination ou à des déficits de l’attention. En outre, un trouble du langage oral sera suivi d’un risque de trouble spécifique des apprentissages avec déficit en lecture dans plus de 50% des cas.
Des difficultés psychologiques et comportementales sont également fréquemment associées aux troubles spécifiques des apprentissages (anxiété de performance, manque de confiance en soi).
Donc cette plateforme sera votre meilleur ami pour vous falciter les cours ou les exercices à la maison
 </p> 
          <Link to="/blog" className="btn-underline">Sur le blog</Link>
    </div>
    </div>
    
    <div className="col col-2">
            <img src={imageabout} className="img" alt="img"  />
    </div>
            </section >
      )
}

export default Aboutheader