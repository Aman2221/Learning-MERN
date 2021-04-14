import React from 'react'
import '../styles/Navbar.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Link, NavLink } from 'react-router-dom'
import logo from '../img/logo.png'
const Navbar = () => {
    return (
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to='/' className="navbar-brand" href="#"> 
                <img className='header_logo' src={logo} alt="logo"/>
                <h5 id='header_name'>A M A N</h5>
                </Link>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <Link to='/' className="nav-link">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item active">
                    <Link to='/about' className="nav-link">About <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item active">
                    <Link to='/contact' className="nav-link">Contact <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item active">
                    <Link to='/login' className="nav-link">Login <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item active">
                    <Link to='/register' className="nav-link">Register <span className="sr-only">(current)</span></Link>
                </li>
                </ul>  
            </div>
            </nav>
    )
}

export default Navbar
