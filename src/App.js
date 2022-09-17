import * as React from "react";
//Importation des routes
import { Routes, Route } from "react-router-dom";
// Les importations les pages
import Home from './Components/Pages/Home'
import About from "./Components/Pages/About";
import Galerie from "./Components/Pages/Galerie";
import Pageerreur from "./Components/Pages/Pageerreur";
import Blog from './Components/Pages/Blog';
import Pageblogdetails from "./Components/Pages/Pageblogdetails";
import Trouble from "./Components/Pages/Trouble";
import Footer from "./Components/Footer";
import Testapi from "./Components/Pages/Testapi";




function App() {
  return (
    
    <div className="App">
      
      
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="troubleapprentissage" element={<Trouble />} />
        <Route path="about" element={<About />} />
        <Route path="galerie" element={<Galerie />} />
        <Route path="blog" element={<Blog />} />
        <Route path="Testapi" element={<Testapi />} />
        <Route path="blogdetails" element={<Pageblogdetails />} />
        <Route path="*" element={<Pageerreur />} />
        
       
      </Routes>
      <Footer/>
      
    </div>
  );
}



export default App;
