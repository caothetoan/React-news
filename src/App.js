import React, { Component } from 'react';
//import logo from './logo.svg';
import './themes/admin/AdminLTE/css/AdminLTE.min.css';
import './themes/admin/AdminLTE/css/skins/_all-skins.min.css';
import './assets/css/bootstrap.css';
//import './assets/css/font-awesome.min.css';

//import 'https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css';import { Button } from 'react-bootstrap';

import './App.css';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Router from './Router'

var FontAwesome = require('react-fontawesome');

const App = () => (
  <div className="hold-transition skin-blue sidebar-mini">
     <div className="wrapper">        <Header />
        <div className="clear">&nbsp;</div>
      

        <Sidebar /> 
        <div className="clear">&nbsp;</div>
      
        <div className="content-wrapper">
            <div id="content-outer">                <section className="content-header">
                    <h1>
                        <a href="/">Home</a>
                            <FontAwesome
                        className='super-crazy-colors'
                        name='rocket'
                        size='2x'
                        spin
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      />
                        <small>
                            <a href="" className="btn btn-default pull-right">
                                <i className="fa fa-plus"></i>
<FontAwesome
                                className='super-crazy-colors'
                                name='rocket'
                                size='2x'
                                spin
                                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      />
                                Thêm tin tức
                            </a>
                        </small>
                    </h1>
                   
                </section>
                <section className="content">
                    <div className="row">
                        <div className="col-xs-12">

                            <div className="box">
                                <div id="content" className="box-body">
                                     <Router />
                                 </div>
                            </div>
                        </div>
                        
                    </div>                       
                </section>
                <div className="clear">
                    &nbsp;
                </div>
            </div>
        </div>
    </div>
  </div>
)

export default  App