import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <div>
            <li><Link to={"/"}>Home</Link></li>
        </div>
    );
};

export default Navbar;