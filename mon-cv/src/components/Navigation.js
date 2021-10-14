import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    const [visible, setVisible] = useState(true);
    return (
        <nav>
            
            <ul>
                <i className="fa fa-times fa-2x " onClick={() => setVisible(false)}></i>
                <NavLink exact to ="/" activeClassName="nav-active">
                    Home
                </NavLink>
                
                
                <NavLink to = "/information" activeClassName="nav-active">
                    Informations
                </NavLink>
                <NavLink to ="/portfolio" activeClassName="nav-active">
                    PortFolio
                </NavLink>
                <NavLink exact to ="/contact" activeClassName="nav-active">
                    Contact
                </NavLink>
                <NavLink to="/cv" href="" activeClassName="nav-active">
                    CV
                </NavLink>
                <NavLink to="/game" activeClassName="nav-active">
                    Game
                </NavLink>
            </ul>
        </nav>
    );
};

export default Navigation;