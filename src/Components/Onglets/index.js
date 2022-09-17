const Onglets = () => {
    
    return (
        <section class="onglets">
            
            <div class="tabs">
             
                <div class="tab">
                    <input type="radio" id="tab1" name="onglet" checked>
                        <label for="tab1">Postes</label>
                        <div class="contenu">

                            <div class="tab-flex">
                                <img src="../img/trouble.jpg" width="50" alt="tab1 image 1">
                                    <p>Lorem ipsum dolor sit amet. </p>
                                        <span><i class="fa-solid fa-calendar"></i> 21
                                            avril 2022</span>
                                    
                            </div>

                            <div class="tab-flex">
                                <img src="./img/js.png" alt="tab1 image 1">
                                    <p>Lorem ipsum dolor sit amet.</p>
                                        <span><i class="fa-solid fa-calendar"></i> 21
                                            avril 2022
                                    </span>
                            </div>

                            <div class="tab-flex">
                                <img src="./img/react.png" alt=" tab1 image 1">
                                    <p>Lorem ipsum dolor sit amet.</p>
                                        <span><i class="fa-solid fa-calendar"></i> 21
                                            avril 2022
                                    </span>
                            </div>
                        </div>
                </div>
                
                <div class="tab">
                    <input type="radio" id="tab2" name="onglet">
                        <label for="tab2">Instagram</label>
                        <div class="contenu">
                            <div class="tab-flex">
                                <img src="./img/pic2.jpg" alt="tab1 image 1">
                                    <p>Lorem ipsum dolor sit amet.</p>
                                        <span><i class="fa-solid fa-calendar"></i> 21 avril 2022
                                    </span>
                            </div>

                            <div class="tab-flex">
                                <img src="./img/pic2.jpg" alt="tab1 image 1">
                                    <p>Lorem ipsum dolor sit amet.<br>
                                        <span><i class="fa-solid fa-calendar"></i> 21
                                            avril 2022</p>
                                    </p>
                            </div>

                            <div class="tab-flex">
                                <img src="./img/pic2.jpg" alt="tab1 image 1">
                                    <p>Lorem ipsum dolor sit amet.<br>
                                        <span><i class="fa-solid fa-calendar"></i> 21
                                            avril 2022</p>
                                    </p>
                            </div>

                            <div class="tab-flex">
                                <img src="./img/pic2.jpg" alt="tab1 image 1">
                                    <p>Lorem ipsum dolor sit amet.</p>
                                        <span><i class="fa-solid fa-calendar"></i> 21
                                            avril 2022<
                                    </span>
                            </div>
                        </div>
                </div>
                
                <div class="tab">
                    <input type="radio" id="tab3" name="onglet">
                        <label for="tab3">TAB 3</label>
                        <div class="contenu">
                            <div class="tab-flex">
                                <img src="./img/pic3.jpg" alt="tab1 image 1">
                                    <p>Lorem ipsum dolor sit amet.
                                        <span><i class="fa-solid fa-calendar"></i> 21 avril 2022</p>
                                    </p>
                            </div>

                            <div class="tab-flex">
                                <img src="./img/pic3.jpg" alt="tab1 image 1">
                                    <p>Lorem ipsum dolor sit amet.
                                        <span><i class="fa-solid fa-calendar"></i> 21
                                            avril 2022</p>
                                    </p>
                            </div>

                            <div class="tab-flex">
                                <img src="./img/pic3.jpg" alt="tab1 image 1">
                                    <p>Lorem ipsum dolor sit amet.
                                        <span><i class="fa-solid fa-calendar"></i> 21
                                            avril 2022</p>
                                    </p>
                            </div>

                            <div class="tab-flex">
                                <img src="./img/pic3.jpg" alt="tab1 image 1">
                                    <p>Lorem ipsum dolor sit amet.
                                        <span><i class="fa-solid fa-calendar"></i> 21
                                            avril 2022</p>
                                    </p>
                            </div>
                        </div>
                </div>
            </div>
        </section>
)
    
}

export default Onglets;