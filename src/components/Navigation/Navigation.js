import React from 'react';
import { Link } from 'react-router-dom'
//import '../../themes/admin/AdminLTE/css/AdminLTE.min.css';
//import './Header.css'
// The Header creates links that can be used to navigate
// between routes.
const Navigation = () => (
  
        <nav className="navbar navbar-static-top" role="navigation">
            <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
                <span className="sr-only">Toggle navigation</span>
            </a>
       <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
                <li className="dropdown">                    <Link to='/'>Home</Link></li>
               
              </ul>
        </div>
    </nav>
  
)
export default Navigation