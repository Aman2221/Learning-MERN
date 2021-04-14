import React, { useState, useEffect } from 'react'
import '../styles/About.css'
import myimg from '../img/myimg.jpg'
import { Button } from '@material-ui/core'
import { red } from '@material-ui/core/colors'
import { useHistory } from 'react-router-dom'

const About = () => {

    const [userData, setUserdata] = useState({});

    console.log(userData);
    return (
        <div className='container emp-profile'>
           <form method=''>
           <div className="row">
            <div className="col-md-4">
                <img className='profile-img' src={myimg} alt="aman"/>
            </div>
            <div className="col-md-6">
                <div className="profile_head">
                    <h5>Aman Singh</h5>
                    <p>Web Devloper</p>
                    <p className="profile_ratings mt-3 mb-5">RANKING : <span>8/10</span></p>
                    <ul className="nav" role='tablist'>
                        <li className="nav-item">
                            <a className="nav-link active" id='home-tab' aria-current="page" href="#home" role='tab'>
                            <i class="fas fa-address-card"></i>
                            About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id='profile-tab' aria-current="page" href="#profile" role='tab'>
                            <i className="fas fa-external-link-alt"></i>
                            Link
                            </a>
                        </li> 
                    </ul>
                </div>
            </div>
            <div className='col-md-2'>
                <Button id='editButton' variant="contained" color="primary">EDIT</Button>
            </div>
           </div>
           <div className="row">
           <div className="col-md-4">
            <div className="profile-work">
                <p className="work-links">WORK LINKS</p>
                <a href="" target='_aman'><i className="fab fa-twitter"></i>Twitter</a><br/>
                <a href="" target='_aman'><i className="fab fa-instagram"></i>Instagram</a><br/>
                <a href="" target='_aman'><i className="fab fa-github"></i>GitHub</a><br/>
                <a href="" target='_aman'><i className="fab fa-linkedin"></i>Linkedin</a><br/>
            </div>
           </div>
           <div className="col-md-8 pl-5 about-info">
           <div className="tab-content" id='myTabContent'>
           <div className="tab-pane show active" id='home' role='tabpanel' >
           <div className="row">
            <div className="col-md-6">
                <label>Name</label>
             </div>
             <div className="col-md-6">
                <p>Aman</p>
            </div>
             <div className="col-md-6">
                <label>User ID</label>
             </div>
             <div className="col-md-6">
                <p>767362</p>
            </div>
            <div className="col-md-6">
                <label>Email</label>
             </div>
             <div className="col-md-6">
                <p>aman@gmail.com</p>
            </div>
            <div className="col-md-6">
                <label>Phone</label>
             </div>
             <div className="col-md-6">
                <p>+54 78987</p>
            </div>
            <div className="col-md-6">
                <label>Profession</label>
             </div>
             <div className="col-md-6">
                <p>Web Dev</p>
            </div>
           </div>
           </div>
           </div>
           </div>
           </div>
           </form>
        </div>
    )
}

export default About
