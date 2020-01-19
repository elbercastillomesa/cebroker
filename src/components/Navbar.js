import React from 'react';
import logo from '../images/logo.svg'

export default (  ) => {

    return(

        <nav className="header-nav">
			<a href="#" className="nav-logo">
				<img src={logo} alt="logo"/>
			</a>
			<a href="#" className="nav-links">Features</a>
			<a href="#" className="nav-links">Plans</a>
			<a href="#" className="nav-links">Organizations</a>
			<a href="#" className="nav-links nav-links_active">Browse Courses</a>
			<a href="#" className="nav-links">Support</a>
			<a href="#" className="nav-button">Sign in</a>
			<a href="#" className="nav-button nav-button_green">7 day trial</a>
        </nav>
    )
}