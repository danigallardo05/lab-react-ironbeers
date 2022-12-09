import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import NavHome from '../components/NavHome';
import { useParams } from 'react-router-dom';

const SingleBeer = () => {



    let { id } = useParams();
    const [oneBeer, setOneBeer] = useState(null)

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            .then(axiosResponse => {
                setOneBeer(axiosResponse.data)
            })
            .catch(err => console.log(err))
    }, [id])


    return (

        <div>

            <NavHome />
            <h1 className='title'>Single Beer: </h1>
            {oneBeer ? (
            <div key={oneBeer._id}  className="oneBeer">
                <img  className="imageBeer" src={oneBeer.image_url} alt='beerpic' />
                <h4>{oneBeer.name}</h4>
                <h5>{oneBeer.tagline}</h5>
                <p>{oneBeer.first_brewed}</p>
                <p>{oneBeer.attenuation_level}</p>
                <p>{oneBeer.description}</p>
                <p>{oneBeer.contributed_by}</p>

            </div>) : <p>loading...</p>}

        </div>
    );
}

export default SingleBeer;
