//Source: https://youtu.be/xMNhDf5-hvk

import React from 'react'
import {Link} from 'react-router-dom'

function NavBar(){
    return(
        <ul>
            <li>
                <Link to="/schools">Available Schools</Link>
            </li>
            <li>
                <Link to="/teachers">Registered Teachers</Link>
            </li>
            <li>
                <Link to="/register">Register Teacher</Link>
            </li>
            <li>
                <Link to="/teachers/id">Search by Teacher Id</Link>
            </li>
            <li>
                <Link to="/delete">Delete by Teacher Id</Link>
            </li>
        </ul>

    );
}

export default NavBar;