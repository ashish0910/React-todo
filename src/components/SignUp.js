import React, {useState} from 'react'
import {NavLink} from 'react-router-dom';

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleChange = (e) =>{
        if(e.target.id==="firstName")
            setFirstName(e.target.value);
        else if(e.target.id==="lastName")
            setLastName(e.target.value);
        else if(e.target.id==="email")
            setEmail(e.target.value);
        else if(e.target.id==="password")
            setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(firstName);
        console.log(lastName);
        console.log(email);
        console.log(password);
    }

    return (
        <div className = "container">
            <form onSubmit = {handleSubmit} className = "white">
                <h5 className = "grey-text text-darken-3">Sign Up</h5>
                <div className = "input-field">
                    <label htmlfor="firsName">First Name</label>
                    <input type="text" id="firstName" onChange = {handleChange} />
                </div>
                <div className = "input-field">
                    <label htmlfor="lastName">Last Name</label>
                    <input type="text" id="lastName" onChange = {handleChange} />
                </div>
                <div className = "input-field">
                    <label htmlfor="email">Email</label>
                    <input type="email" id="email" onChange = {handleChange} />
                </div>
                <div className = "input-field">
                    <label htmlfor="password">Password</label>
                    <input type="password" id="password" onChange = {handleChange} />
                </div>
                <div className= "input-field">
                    <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
                </div>
            </form>
            <p>
                Already have an account? {" "}
                <NavLink to="/signin">
                    Sign in here
                </NavLink>
            </p>            
        </div>
    )
}

export default SignUp
