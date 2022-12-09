import React from 'react';
import NavHome from '../components/NavHome';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const ListBeer = () => {

    const [beers, setBeers] = useState([]);

    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
            .then(axiosResponse => {
                console.log(axiosResponse.data)
                setBeers(axiosResponse.data)
            })
            .catch(err => console.log(err))
    }, [])


    return (

        <div >
            <NavHome />
            <h1 className='title'>All Beers</h1>


            <div className="beersCard">
                {beers.map((singleBeer) => {
                    return (
                        <NavLink to={`/${singleBeer._id}`}>
                            <div key={singleBeer._id} className="singleBeer" >
                                <img className="imageBeer" src={singleBeer.image_url} alt='beerpic' />
                                <h4>{singleBeer.name}</h4>
                                <h5>{singleBeer.tagline}</h5>
                                <p>{singleBeer.contributed_by}</p>


                            </div>
                        </NavLink>
                    );
                })}
            </div>



        </div>
    );
}

export default ListBeer;
