import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to={'/phones'}>Home</Link>
        </div>
    );
};

export default Header;