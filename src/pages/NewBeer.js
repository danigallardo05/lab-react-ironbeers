import React from 'react';
import NavHome from '../components/NavHome';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewBeer = () => {

    const navigate = useNavigate()

    const [state, setState] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_levels: 0,
        contributed_by: ''
    })

    const updateState = e => setState({
        ...state,
        [e.target.name]: e.target.value
    });

    const submitFuction = e => {
        e.preventDefault();
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
            name: state.name,
            tagline: state.tagline,
            description: state.description,
            first_brewed: state.first_brewed,
            brewers_tips: state.brewers_tips,
            attenuation_levels: Number(state.attenuation_levels),
            contributed_by: state.contributed_by

        })
            .then(axiosResponse => {
                console.log(axiosResponse.data)
                navigate('/list-beer')
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <NavHome />
            <h1 className='title'>New Beer: </h1>


            <form className='form' onSubmit={submitFuction}>
                <label>Name:</label>
                <input type='text' name='name' onChange={updateState} value={state.name} />

                <br />
                <br />
                <label>Tagline:</label>
                <input type='text' name='tagline' onChange={updateState} value={state.tagline} />

                <br />
                <br />
                <label>Description:</label>
                <input type='text' name='description' onChange={updateState} value={state.description} />

                <br />
                <br />
                <label>First brewed:</label>
                <input type='text' name='first_brewed' onChange={updateState} value={state.first_brewed} />

                <br />
                <br />
                <label >Brewers tips:</label>
                <input type='text' name='brewers_tips' onChange={updateState} value={state.brewers_tips} />

                <br />
                <br />
                <label >Attenuation level:</label>
                <input type='number' name='attenuation_level' onChange={updateState} value={state.attenuation_levels} />

                <br />
                <br />
                <label>Contributed by:</label>
                <input type='text' name='contributed_by' onChange={updateState} value={state.contributed_by} />

                <br />
                <br />
                <button className='button'>Add a beer</button>

            </form>
        </div>
    );
}

export default NewBeer;
