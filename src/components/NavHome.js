import React from 'react';
import { NavLink } from 'react-router-dom';
import  HomePic from '../assets/home.png'

const NavHome = () => {
    return (
        <div>
            <NavLink to='/'>
                <header>
                <i className="fal fa-home-alt"></i>
                </header>
            </NavLink>
        </div>
    );
}

export default NavHome;
