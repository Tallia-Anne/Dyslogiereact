import './index.css'
const Sectiontemoin = () => {
    return (

        <section class="slide">

            <div class="slider">

                {/* <!-- dotes --> */}

                <input type="radio" name="slider" title="slide1" checked="checked" class="slider__nav" />
                <input type="radio" name="slider" title="slide2" class="slider__nav" />
                <input type="radio" name="slider" title="slide3" class="slider__nav" />
                <input type="radio" name="slider" title="slide4" class="slider__nav" />
                {/* <!-- dotes --> */}


                <div class="slider__inner">
                    <div class="slider__contents"><i class="slider__image fa fa-codepen"></i>
                        <h2 class="slider__caption">user1</h2>
                        <p class="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
                    </div>
                    <div class="slider__contents"><i class="slider__image fa fa-newspaper-o"></i>
                        <h2 class="slider__caption">user2</h2>
                        <p class="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
                    </div>
                    <div class="slider__contents"><i class="slider__image fa fa-television"></i>
                        <h2 class="slider__caption">user3</h2>
                        <p class="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
                    </div>
                    <div class="slider__contents"><i class="slider__image fa fa-diamond"></i>
                        <h2 class="slider__caption">user4</h2>
                        <p class="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
                    </div>
                </div>
            </div>
        </section>
)
}

export default Sectiontemoin;