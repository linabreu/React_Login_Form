import React, { useContext } from 'react';
import { LoginContext } from '../Contexts/LoginContext';
import ooblogologo from '../images/logo.png';
import {Link} from "react-router-dom";


export default function () {

const {userName} = useContext(LoginContext);

  return (
    <div>
    <nav className="navbar navbar-expand-lg purple-nav m-0">
   <img src ={ooblogologo} alt="logo" className = "main-logo"></img>
   <Link as = {Link} to = "/home" className="navbar-brand brand-name ml-3" >Odyssey of Beauty</Link>
        <div className="navbar-nav">
        <Link as={Link} to="/login" className = "nav-item nav-link" >Log In</Link>
        </div>
    </nav>
    </div>
  )
}
