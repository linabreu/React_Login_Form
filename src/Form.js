import React, {Component} from 'react';
import arrow from './images/arrow.png';


export default class Form extends Component {
    render() {return (
    <div className = "row">
    <div className = "col-sm-4"></div>
    <div className = "col-sm-4">
    <form className="login-form">
        <div className="row">
        <h3 className = "form-header">Welcome<br></br>Back</h3>
        </div>
        <div className="row space-between"></div>
        <div className="row">
        <div className="form-group">
            <label for="formGroupExampleInput" className = "form-label">Email</label>
            <input type="text" className="form-control no-border" id="formGroupExampleInput" placeholder="someone@example.com"></input>
        </div>
        <div class="form-group">
            <label for="formGroupExampleInput2" className = "form-label">Password</label>
            <input type="password" className="form-control no-border" id="formGroupExampleInput2" placeholder='••••••••'></input>
        </div>
        </div>
        <div className = "row mt-3">
            <div class = "col-sm-8">
            <h4 className = "sign-in ">Sign In</h4>
            </div>
            <div class = "col-sm-4 text-center">
            <button className = "button-round"><img src ={arrow} className = 'form-arrow' alt="arrow pointing right"></img></button>
            </div>
        </div>
        <div className = "row mt-3">
            <div className = "col-lg-6 text-center" >
            <a className="bottom-form-text" href="#">Sign Up</a>
            </div>
            <div className = "col-lg-6 text-center" >
            <a className="bottom-form-text mb-5" href="#">Forgot Password</a>
            </div>
        </div>
    </form>
    </div>
    <div className = "col-sm-4"></div>
    </div>
    );}
}