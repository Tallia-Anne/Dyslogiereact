import './index.css'
import React from 'react';
import {Link} from "react-router-dom";
import logo from "../../assets/Dyslogielogo.png";
const Header = () => {
    return (
        <>
            <input type="checkbox" id="check" />
            <nav>
                <div className="icon">
                    <Link to="/"><img src={logo} className="img" alt="img" width="40" /> </Link></div>
                <ol>
                    <li> <Link to="/troubleapprentissage" > Trouble apprentissage</Link></li>
                    <li><Link to="/about">  A propos </Link>  </li>
                    <li> <Link to="/galerie"> Galerie</Link></li>
                    <li> <Link to="/blog" > Blog</Link></li>
                </ol>
                <label htmlFor="check" className='bar' >
                    <span className="fa fa-bars" id="bars"></span>
                    <span className="fa fa-times" id="times"></span>
                </label>
            </nav>
        </>
)
}

export default Header