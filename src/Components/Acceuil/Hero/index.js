import './index.css'
import hero from "../../../assets/header.jpg";
const Heroblog = () => {
    return (
        <div id="showcase" className="container-header">
            <div className="bg-image" style={{ backgroundImage: `url(${hero})` }}></div>
            <h1 class="animated animatedFadeInUp fadeInUp" >Un plaisir pour apprendre les cours </h1>
        </div>
)
}
export default Heroblog