import './index.css'
import gridimage1 from "../../../assets/pexels-energepiccom-313690.jpg";
import gridimage2 from "../../../assets/image6.jpg";
const SectionQuatre = () => {
    return (
        // < !--dbt_sectionCategorie -- >

        <section id="sectionCategorie" className="grid">
            <div className="box" style={{ backgroundImage: `url(${gridimage1})` }}>
                <h2 className="boxtitle"> Aide </h2>
        </div>
            <div className="box" style={{ backgroundImage: `url(${gridimage2})` }} >
        
                <h2 className="boxtitle" > <a href="blogversion2.html"> Blog </a> </h2>
        </div>
        </section>
        // <!--fin_sectionQuatre -->
)
}
export default SectionQuatre;