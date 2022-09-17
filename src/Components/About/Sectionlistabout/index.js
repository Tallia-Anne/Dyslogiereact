import './index.css'
import imagelist from "../../../assets/aboutimg.jpg";
const listabout = () => {
    return (
        <section id="sectiontrois" class="grid" style={{ backgroundImage: `url(${imagelist})` }}>
            <div class="paralla"  >
                <h3>Il n’est jamais trop tard pour devenir ce que tu aurais pus etres </h3>

                <div class="liste">
                    <ul>

                        <li><i class="fa-solid fa-check icon-list"></i>Lorem ipsum dolor sit amet.</li>
                        <li><i class="fa-solid fa-check icon-list"></i>Lorem ipsum dolor sit amet.</li>
                        <li><i class="fa-solid fa-check icon-list"></i>Lorem ipsum dolor sit amet.</li>
                        <li><i class="fa-solid fa-check icon-list"></i>Lorem ipsum dolor sit amet.</li>
                        <li><i class="fa-solid fa-check icon-list"></i>Lorem ipsum dolor sit amet.</li>

                    </ul>
                </div>
            </div>

        </section>
)
}
export default listabout