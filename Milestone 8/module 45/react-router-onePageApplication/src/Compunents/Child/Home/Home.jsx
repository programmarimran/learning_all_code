import React from 'react';
import { Link } from 'react-router';

const Home = () => {
    return (
        <div>
            <h1>This is Home</h1>
            <Link to="/">Home</Link>
            <Link to="/mobile">Mobile</Link>
            <Link to="/laptop">Laptop</Link>
        </div>
    );
};

export default Home;