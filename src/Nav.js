import React, {Component} from 'react';
import ooblogologo from './images/ooblogo.png';

export default class Nav extends Component {
    render() {return (
    <nav className="navbar navbar-expand-lg purple-nav">
      <img src ={ooblogologo} alt="logo" className = "main-logo"></img>
      <a className="navbar-brand brand-name ml-3" href="#">Odyssey of Beauty</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon mr-2"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
        <a className="nav-item nav-link active" href="#">Our Mission</a>
        <a className="nav-item nav-link" href="#">Products</a>
        <a className="nav-item nav-link" href="#">Log In</a>
        </div>
    </div>
    </nav>
    );}
}