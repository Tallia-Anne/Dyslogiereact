import './index.css'
import imagecard from "../../../assets/imageenseigne.jpg";
import imagecard2 from "../../../assets/image64.jpg";
import imagecard3 from "../../../assets/image.jpg";

const SectionCinq = () => {
    return (
        //    < !--------section_gallerie  ----------->
         <section className="sec-gallerie">
      <div className="container-gallerie">
        <p className="sec-gallerie-text">
         LA GALERIE
        </p>
        <h2 className="title-gall animated2 animatedFadeInUp2 fadeInUp2 ">Les valeurs de la communauté</h2>

        <div className="cards-gallerie">
          <div className="card-gall">
            <div className="top-card-ga">
              <img
                  src={imagecard }
                alt=""
              />
            </div>
           
          </div>

          <div className="card-gall">
            <div className="top-card-ga">
              <img
                  src={imagecard2}
                alt=""
              />
            </div>
           
          </div>

          <div className="card-gall">
            <div className="top-card-ga">
              <img
                  src={imagecard3}
                alt=""
              />
            </div>
            
          </div>

         

        

          
        </div>
                 <div className="bottom-card-gallerie">
            
              <a href="portfolio.html" className="btn-sav">
               Voire la galerie
              </a>
            </div>
      </div>
    </section>
    // <!--------section_galerie   ----------->
)
}

export default SectionCinq