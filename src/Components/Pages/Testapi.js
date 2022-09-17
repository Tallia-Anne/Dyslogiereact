import Cardblog from "../Cardblog";
import axios from "axios";

import { useState, useEffect } from "react";



const Page = () => {

    const [data, setData] = useState(null);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost:3000/article/all");
            console.log("response.data", response.data);
            const modifiedData = response.data
            setData(modifiedData);
        };

        fetchData()

    }, [search])

    return (
        <div className='charactère'>

           
            <div className="search-bar" >
                <h4>Barre de recherche: </h4>
                {/* recuperer les donnée dans le composant */}
                <input
                    type="text"
                    value={search}
                    placeholder="veiller entrer un personnage "
                    onChange={(event) => {
                        setSearch(event.target.value);
                    }}
                />

            </div>

            {data !== null ? <Cardblog data={data} /> : null}




        </div>
    )
}

export default Page