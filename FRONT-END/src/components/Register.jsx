import React, { useState } from 'react'
import '../styles/Register.css'
import register from '../img/register.png'
import { Link, useHistory } from 'react-router-dom'

const Register = () => {

    const history = useHistory();
    const [user, setUser] = useState({
        name  : '',
        email : '',
        phone : '',
        work : '',
        password : '',
        cpassword : '',
    });
    
    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({...user, [name]:value})
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        const { name, email, phone, work, password, cpassword } = user;

        const res = await fetch('/register', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify({
                name, email, phone, work, password, cpassword
            })
        });
        const data = await res.json();

        if(data.status === 422 || !data ){
            window.alert('Invalid Registration')
        }
        else {
            window.alert('User registered successfully');
            history.push('/login')
        }
    }
    return (
        <div className='register'>
        <section className="signup">
            <div className="container mt-5">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Sign up</h2>
                        <form method='POST' className="resitration-form">
                            <div className="form-group">
                                <label htmlFor="name"><i className="fas fa-user"></i></label>
                                <input type="text" name='name' id='name' autoComplete='off'
                                 value={user.name}
                                 onChange={handleInputs}
                                 placeholder='Your Name'/>
                            </div>
                             <div className="form-group">
                                <label htmlFor="email"><i className="fas fa-envelope"></i></label>
                                <input type="text"  name='email' id='email' autoComplete='off'
                                 value={user.email}
                                 onChange={handleInputs}
                                 placeholder='Your Email'/>
                            </div>
                             <div className="form-group">
                                <label htmlFor="phone"><i className="fas fa-phone-alt"></i></label>
                                <input type="text" name='phone' id='phone' autoComplete='off' 
                                 value={user.phone}
                                 onChange={handleInputs}
                                 placeholder='Your Phone'/>
                            </div>
                             <div className="form-group">
                                <label htmlFor="work"><i className="fas fa-building"></i></label>
                                <input type="text" name='work' id='work' autoComplete='off' 
                                 value={user.work}
                                 onChange={handleInputs}
                                 placeholder='Your Profession'/>
                            </div>
                             <div className="form-group">
                                <label htmlFor="password"><i className="fas fa-lock"></i></label>
                                <input type="text" name='password' id='password' autoComplete='off' 
                                 value={user.password}
                                 onChange={handleInputs}
                                 placeholder='Your Password'/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="cpassword"><i className="fas fa-user-lock"></i></label>
                                <input type="password" name='cpassword' id='cpassword' autoComplete='off' 
                                 value={user.cpassword}
                                 onChange={handleInputs}
                                 placeholder='Confirm Password'/>
                            </div>
                            <button type="button" onClick={handleRegister} className="btn btn-primary">Register</button>
                        </form>
                    </div>
                </div>
                <div className="registration-img">
                    <img src={register} alt="registerImg"/>
                    <Link to='/login' className="nav-link">Login <span className="sr-only">(current)</span></Link>
                </div>
            </div>
        </section>
            
        </div>
    )
}

export default Register
