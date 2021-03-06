import React from 'react'
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

function Navbar() {
    const user = null;
    return (
        <div>
            <nav className = 'nav-wrapper grey darken-3'>
                <div className='container'>
                    <Link to='/' className='brand-logo'>Scheduler</Link>
                    {user ?
                        <SignedInLinks />
                        :  <SignedOutLinks /> 
                    }   
                </div>
            </nav>
        </div>
    )
}

export default Navbar
