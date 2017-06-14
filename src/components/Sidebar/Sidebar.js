
import React from 'react';
import { Link } from 'react-router-dom'
//import './Header.css'
// The Header creates links that can be used to navigate
// between routes.
const Sidebar = () => (
   <div>
    <div className="clear">&nbsp;</div>
           
    <aside className="main-sidebar">
        <section className="sidebar">
            <ul className="sidebar-menu">
                

                <li className="header">
                    <Link to='/'>
                        <i className="fa fa-dashboard"></i>
                        <span>Dashboard </span>
                    </Link>
                </li>
                <li className="treeview">
                    <Link to='/article'>
                        <i className="fa fa-envelope-o fa-fw"></i>
                        <span>Tin tức</span>
                        <i className="fa fa-angle-left pull-right"></i>
                    </Link>
                    <ul className="treeview-menu">
                        <li><a href="/article"><i className="fa fa-circle-o"></i>Xem tin tức</a></li>
                        <li><a href="/article/add"><i className="fa fa-circle-o"></i>Thêm tin tức</a></li>
                       
                    </ul>
                </li>

                <li className="treeview">
                    <Link to='/schedule'>Schedule</Link></li>

            </ul>
     </section>
  </aside>  </div>

)
export default Sidebar