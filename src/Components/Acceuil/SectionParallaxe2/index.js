import './index.css'
import parallaxe2 from "../../../assets/about2.jpg";
const SectionParallaxe2 = () => {
    return (
    // < !--dbt_sectionParallaxe2 -->
        <section id="sectionParallaxe2" className="grid" style={{ backgroundImage: `url(${parallaxe2})` }} >
        <div className="parallaxe2"  >

                <h3>Ce qui compte, ce n’est pas  ce  qui arrive, c’est ce qu’on
                    fait de ce qui m’arrive</h3>
                <div className="rideau"></div>
            </div>

            
        </section>
    )
     // < !--dbt_sectionParallaxe2 -->
}

export default SectionParallaxe2;
