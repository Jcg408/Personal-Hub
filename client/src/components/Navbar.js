import React from 'react';
import {NavLink} from 'react-router-dom';


const Navbar = () => {
    return(
        <div className="Navigation">
        <ul>
            <li><NavLink to="/contacts">Contacts</NavLink></li>
            <li><NavLink to="/quotes">Quotes</NavLink></li>
            <li><NavLink to="/calendar">Calendar</NavLink></li>
            <li><NavLink to="/photos">Photos</NavLink></li>
            
        </ul>
    </div>
    )
    
}
 export default Navbar;