import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const NotFound = () => {
    return (
        <div className='not-found'>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to='/' className='not-found__link'>Retourner sur la page d’accueil
        </Link>
        </div>
    );
};

export default NotFound;