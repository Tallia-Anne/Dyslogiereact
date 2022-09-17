import './index.css'
import { Link } from "react-router-dom";
import image404 from "../../assets/initi.png";
const erreur = () => {
    return (
        
        <div className="bg-404" style={{ backgroundImage: `url(${image404})` }} >
           <div>
                <h1>404</h1>
            
            
            <div className="btn">
                    <Link to="/" className='button'>Acceuil</Link>
                <div className="fond"></div>
                </div>
            </div>
        </div> 
       
    )
}
export default erreur