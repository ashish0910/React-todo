import React from 'react'
import {NavLink} from 'react-router-dom';

function SignedInLinks() {
    return (
        <div>
            <ul className='right'>
                <li><NavLink to='/newTodo'>New Todo</NavLink></li>
                <li><NavLink to='/'>Log Out</NavLink></li>
                <li><NavLink to='/' className = 'btn btn-floating pink lighten-1'>HK</NavLink></li>
            </ul>
        </div>
    )
}
export default SignedInLinks