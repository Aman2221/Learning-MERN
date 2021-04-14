import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/ErrorPage.css'
const ErrorPage = () => {
    return (
        <div className='errorPage'>
            <div className="notFound">
            <div className="notFound">
                <div className="notFound-404">
                <h1>400</h1>
                <div className="second_div">
                <h2>We are sorry, page not found !</h2>
                <p>
                The page you are looking for might have been removed or had its name changed or is temporarily unavailable.
                </p>
                <Link to='/'>Back to home page</Link>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ErrorPage
