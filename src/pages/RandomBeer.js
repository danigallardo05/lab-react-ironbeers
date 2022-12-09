import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import NavHome from '../components/NavHome';



function RandomBeer() {
    let { beerId } = useParams();
    console.log(beerId);

    const [beer, setBeer] = useState(null);

    useEffect(() => {
        axios
            .get("https://ih-beers-api2.herokuapp.com/beers/random")
            .then((axiosresponse) => {
                setBeer(axiosresponse.data);
            })
            .catch((err) => console.log(err));
    }, [beerId]);

    return (
        <div>
            <NavHome />
            <h1 className="title">Random Beer</h1>
            {beer ? (
                <div className="oneBeer">

                    <img src={beer.image_url} alt="Beers" className="imageBeer" />

                    <h4>{beer.name}</h4>
                    <h5>{beer.attenuation_level}</h5>


                    <p>{beer.tagline}</p>
                    <p>{beer.first_brewed}</p>

                    <p>{beer.description}</p>
                    <p>{beer.contributed_by}</p>
                </div>
            ) : (
                <p>loading ...</p>
            )}
        </div>
    );
}

export default RandomBeer;