
import './index.css'

//les images
import imageaccardions1 from "../../assets/image332.jpg";
import imageaccardions2 from "../../assets/about.jpg";
import imageaccardions3 from "../../assets/pexels-bran-sodre-2467450.jpg";
import imageaccardions4 from "../../assets/image.jpg";


const galeriehero = () => {
    
    return (
        <section className="sectig-gallerie">
            <div className="gallery-wrap">

                <div className="item item-1" style={{ backgroundImage: `url(${imageaccardions1})` }} ></div>
                <div className="item item-2" style={{ backgroundImage: `url(${imageaccardions2})` }}></div>
                <div className="item item-4" style={{ backgroundImage: `url(${imageaccardions3})` }}></div>
                <div className="item item-3" style={{ backgroundImage: `url(${imageaccardions4})` }} ></div>



            </div>
        </section>
)
}

export default galeriehero;