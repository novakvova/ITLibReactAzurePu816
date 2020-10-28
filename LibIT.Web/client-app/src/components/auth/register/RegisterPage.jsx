import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RegisterPage extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        errorMessage: "",
        errors: {
            //firstName: "Введіть ім'я"
        }
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        const regex_email = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        const {firstName, lastName, email, errors } = this.state;
        if(firstName.trim()==="")
        {
            //var errors["firstName"]="Введіть ім'я";
            this.setState({errorMessage: "Не валідна форма!",
                            errors: {firstName: "Введіть ім'я"}});
            
        }
        else if (!regex_email.test(email.trim()))
        {
            this.setState({errorMessage: "Не вірна електронна пошта!"});
        }
        else {
            this.setState({errorMessage: ""});
        }
        //var model = 
        console.log("SubmitForm");
    }

    handlerChange = (e) => {
        console.log("e handler", e.target.name +" " + e.target.value);
        this.setState({[e.target.name]: e.target.value});
        //this.setState
    }
    render() { 
        //const errorMessage = this.state.errorMessage;
        const { firstName, 
                lastName, 
                email, 
                errorMessage,
                errors 
            } = this.state;
        return ( 
            <div className="container">
               <br/>
                <div className="card" style={{ marginBottom: "50px" }}>
                    <article className="card-body mx-auto" style={{ maxWidth: 600 + 'px' }}>
                        <h4 className="card-title mt-3 text-center">Create Account</h4>

                        <p className="text-center text-danger">{errorMessage}</p>
                        <p>
                            <Link to="" className="btn btn-block btn-twitter"> <i className="fab fa-twitter"></i>    Login via Twitter</Link>
                            <Link to="" className="btn btn-block btn-facebook"> <i className="fab fa-facebook-f"></i>    Login via facebook</Link>
                        </p>
                        <p className="divider-text">
                            <span className="bg-light">OR</span>
                        </p>
                        <form onSubmit={this.onSubmitForm}>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                                </div>
                                <input className="form-control"
                                    onChange={this.handlerChange} 
                                    placeholder="First name" 
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={firstName} />
                                    <p className="text-danger">{errors["firstName"]}</p>
                            </div>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                                </div>
                                <input className="form-control"
                                    onChange={this.handlerChange}  
                                    placeholder="Last name" 
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={lastName} />
                            </div>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                                </div>
                                <input name="" className="form-control" 
                                    onChange={this.handlerChange}  
                                    placeholder="Email address" 
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={email} />
                            </div>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-phone"></i> </span>
                                </div>
                                <input name="" className="form-control" placeholder="Phone number" type="text" />
                            </div>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                                </div>
                                <input className="form-control" placeholder="Password" type="password" />
                            </div>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                                </div>
                                <input className="form-control" placeholder="Confirm password" type="password" />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-block"> Create Account  </button>
                            </div>
                            <p className="text-center">Have an account? <Link to="/login">Log In</Link> </p>
                        </form>
                    </article>
                </div>
            </div>
         );
    }
}
 
export default RegisterPage;