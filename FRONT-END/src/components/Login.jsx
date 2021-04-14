import React, { useState } from 'react'
import '../styles/Login.css'
import login from '../img/login.png'
import { Link, useHistory } from 'react-router-dom'

const Login = () => {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleLogin = async (e) => {
        e.preventDefault();

        const res = await fetch('/login', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify({
                email,
               password
            })
        });
        const data = await res.json();

        if(data.status === 400 || !data ){
            window.alert('Invalid Creditionals')
        }
        else {
            window.alert('Login Successful');
            history.push('/')
        }
    }

    return (
        <div className='login'>
            <section className="signin">
            <div className="container mt-5">
                <div className="signin-content">
                    <div className="signin-form">
                        <h2 className="form-title">Sign in</h2>
                        <form method='POST' className="resitration-form" >
                             <div className="form-group">
                                <label htmlFor="email"><i className="fas fa-envelope"></i></label>
                                <input type="text"  name='email' id='email' autoComplete='off' 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Your Email'/>
                            </div>
                             <div className="form-group">
                                <label htmlFor="password"><i className="fas fa-lock"></i></label>
                                <input type="password" name='password' id='password' autoComplete='off' 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='Your Password'/>
                            </div>
                            
                            <button type="submit" onClick={handleLogin} className="btn btn-primary">Log in</button>
                        </form>
                    </div>
                </div>
                <div className="registration-img">
                    <img src={login} alt="registerImg"/>
                    <Link to='/register' className="nav-link">Register <span className="sr-only">(current)</span></Link>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Login
