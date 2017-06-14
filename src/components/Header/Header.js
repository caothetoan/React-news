import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css'

import Navigation from '../Navigation/Navigation'
// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header className="main-header">                <Link to='/' className="logo">
                    <span className="logo-mini"><b>A</b>LT</span>
                    <span className="logo-lg"><b>Admin</b>CMS</span>
                </Link>  
                    
 <Navigation />
  </header>
)
export default Header