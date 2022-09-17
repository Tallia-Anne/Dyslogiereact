const Cardblog = (props) => {
    

    return (
        <>
            
            
            <div className="card-left">
                <div className="top-card-left">
                    <img src={props.data.image} className="WordQ" alt="img" />
                </div>
                <div className="bottom-card">
                    <div className="top-btn">{props.data.categorie}
                        <p>{props.data.nom}</p>
                        <a href="bg.details1.html" className="btn-sav">
                            En savoir plus
                        </a>
                    </div>

                </div>
            </div>
        </>
)
    
}

export default Cardblog