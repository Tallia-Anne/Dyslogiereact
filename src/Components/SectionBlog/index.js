// import blog from "../../assets/dataBase.js";
import blogs from "../../assets/blog.js";
import './index.css'
import Card from "../Card";
const SectionSept = () => {
    return (
        
        // < !--------section_card   ----------->
         <section className="featured-blog">
      <div className="container-blog">
        <p className="featured-text">
         Recent post
        </p>
        <h2 className="title-blog animated animatedFadeInUp fadeInUp ">Sur le Blog</h2>

        <div className="cards-blog">
          
            {
              blogs.map((blog) => {
                return (
                  <Card urlImage={blog.url} name={blog.name} text={blog.text} />
)
              })
            }
            
        
        </div>
                 <div className="bottom-card">
            
              <a href className="btn-sav">
               Sur le blog
              </a>
            </div>
      </div>
    </section>
    // <!--------section_card   ----------->
)
}
export default SectionSept;