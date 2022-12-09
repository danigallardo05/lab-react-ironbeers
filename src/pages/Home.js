import React from 'react';
import { NavLink } from 'react-router-dom';
import BeerPic from '../assets/beers.png';
import NewBeerPic from '../assets/new-beer.png';
import RandomBeerPic from '../assets/random-beer.png';

const Home = () => {
    return (
        <div>
            <h1 className='title'>Welcome to IronBeers</h1>


            <div className='cards'>
                <div className='cardInside'>
                    <NavLink to="/list-beer">

                        <img src={BeerPic} alt="pic" className='images' />
                        <h2>All Beers</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                    </NavLink>
                </div>

                <div className='cardInside'>
                    <NavLink to="/random-beer">

                        <img src={NewBeerPic} alt="pic" className='images' />
                        <h2>Random Beer</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                    </NavLink>
                </div>

                <div className='cardInside'>
                    <NavLink to="/new-beer">
                        <img src={RandomBeerPic} alt="pic" className='images' />
                        <h2>New Beer</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </NavLink>
                </div>
            </div>

        </div>
    );
}

export default Home;
