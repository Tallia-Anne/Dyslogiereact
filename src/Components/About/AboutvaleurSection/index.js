//CSS
import './index.css'
//Les images
import imagevaleur1 from "../../../assets/aboutapprendre.jpg";
import imagevaleur2 from "../../../assets/about-savoir.jpg";
import imagevaleur3 from "../../../assets/[GetPaidStock.com]-625688759baa9.jpg";
const AboutvaleurSection = () => {
    return (
        //  < !--------------secdeux: card------------->
    <section className="sec-une" >
    <div className="title">
    <h2>Nos valeurs de notre plateforme</h2>
    </div>
    <div className="card-valeur">
    <div className="cards-valeur">
    <img src={imagevaleur1} className="img" alt="img" />
    <h4>Apprendre</h4>
    </div>
    <div className="cards-valeur">
    <img src={imagevaleur2} className="img" alt="img" />    
    <h4>Savoir</h4>
    </div>
    <div className="cards-valeur">
    <img src={imagevaleur3} className="img" alt="img" />
    <h4>Curoisité</h4>
    </div>
    </div>
    </section>
     
)
}
export default AboutvaleurSection