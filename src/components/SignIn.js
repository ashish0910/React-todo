import React, {useState} from "react";
import { NavLink } from "react-router-dom";

function SignIn (){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleChange = (e) => {
        if(e.target.id === 'email') {
            setEmail(e.target.value);
        }
        else if(e.target.id === 'password'){
            setPassword(e.target.value);
        }
    };

  return (
        <div className = "container">
            <form onSubmit = {handleSubmit} className = "white">
                <h5 className = "grey-text text-darken-3">Sign In</h5>
                <div className = "input-field">
                    <label htmlfor="email">Email</label>
                    <input type="email" id="email" value = {email}onChange = {handleChange} />
                </div>
                <div className = "input-field">
                    <label htmlfor="password">Password</label>
                    <input type="password" id="password" value = {password} onChange = {handleChange} />
                </div>
                <div className= "input-field">
                    <button className="btn pink lighten-1 z-depth-0" onClick = {handleSubmit}>Login</button>
                </div>
            </form>
            <p>
                Don't have an account?{" "}
                <NavLink to="/signup">
                    Sign up here
                </NavLink>
                <br />
            </p>            
        </div>
  );
};
export default SignIn;
