import './index.css'
const Card = (props) => {
    return (
        <div className="card">
            <div className="top-card">
                <img
                    src={props.urlImage}
                    alt=""
                />
            </div>
            <div className="bottom-card">
                <div className="top-btn">{props.name}</div>

                <h3 className="text-card">{props.text}</h3>

                {/* <a className="btn-sav">
                    En savoir plus</a> */}
            </div>
        </div>
)
}

export default Card