import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EclipseWidget from '../../../common/eclipse';
import TextFieldGroup from '../../../common/TextFieldGroup';


class RegisterPage extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        errorMessage: "",
        loading: this.props.loading,
        errors: this.props.errors
    }

    //визивається при зміні даних у пропсах
    UNSAFE_componentWillReceiveProps = (nextProps) => {
        console.log('Change props', nextProps);
        this.setState({
            loading: nextProps.loading,
            errors: nextProps.errors } 
        );
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        
        let errors = {};
        const regex_email = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        const { firstName, lastName, email } = this.state;
        if (firstName.trim() === "") {
            errors = {
                ...errors,
                firstName: "Введіть ім'я"
            };
        }

        if (lastName.trim() === "") {
            errors = {
                ...errors,
                lastName: "Введіть прізвище"
            };
        }

        if (!regex_email.test(email.trim())) {
            errors = {
                ...errors,
                email: "Не вірна електронна пошта!"
            };
        }
        const isValid = Object.keys(errors).length === 0;
        if (isValid) {
            //serverUrl
            const model = {
                Email: email
            };
            this.props.registerUser(model);
            // axios.post(url, model)
            //     .then(
            //         (resp) => {
            //             this.setState({loading: false });
            //         },
            //         (badResp) => {
            //             this.setState({loading: false });
            //         }
            //     )
            //     .catch(err => {
            //         console.log("Global server prooblem in controller message", err);
            //         this.setState({loading: false });
            //     });
            //ajax in server
            this.setState({ errorMessage: "", errors, loading: true });
        }
        else {
            this.setState({ errorMessage: "Не валідна форма!", errors });
        }

        console.log("SubmitForm");
    }

    handlerChange = (e) => {
        console.log("e handler", e.target.name + " " + e.target.value);
        this.setState({ [e.target.name]: e.target.value });
        //this.setState
    }
    render() {
        console.log("Regiter props: ", this.props);
        console.log("Regiter state: ", this.state);
        //const errorMessage = this.state.errorMessage;
        const { firstName,
            lastName,
            email,
            phone,
            password,
            errorMessage,
            loading,
            errors
        } = this.state;
        console.log("Is Erors email:", !!errors["email"]);
        return (
            <>
                <div className="container">
                    <br />
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
                                {/* <div className="form-group input-group">
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
                                </div>
                                <p className="text-danger">{errors["firstName"]}</p> */}


                                <TextFieldGroup 
                                    field="firstName"
                                    value={firstName}
                                    label="Ім'я"
                                    icon="fa fa-user"
                                    //placeholder="Firstname"
                                    error={errors.firstName}
                                    onChange={this.handlerChange}/>

                                <TextFieldGroup 
                                    field="lastName"
                                    value={lastName}
                                    label="Прізвище"
                                    icon="fa fa-user"
                                    //placeholder="Lastname"
                                    error={errors.lastName}
                                    onChange={this.handlerChange}/>

                                <TextFieldGroup 
                                    field="email"
                                    value={email}
                                    label="Ектронна пошта"
                                    icon="fa fa-envelope"
                                    type="email"
                                    //placeholder="Email"
                                    error={errors.email}
                                    onChange={this.handlerChange}/>
                                
                                {/* <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                                    </div>
                                    <input name="" className={classnames("form-control", {"is-invalid": !!errors["email"]}) }
                                        onChange={this.handlerChange}
                                        placeholder="Email address"
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={email} />
                                </div>
                                {!!errors["email"] && <p className="text-danger">{errors["email"]}</p>} */}


                                <TextFieldGroup 
                                    field="phone"
                                    value={phone}
                                    label="Телефон"
                                    icon="fa fa-user"
                                    error={errors.phone}
                                    onChange={this.handlerChange}/>

                                <TextFieldGroup 
                                    field="password"
                                    value={password}
                                    label="Пароль"
                                    icon="fa fa-lock"
                                    type="password"
                                    //placeholder="Email"
                                    error={errors.password}
                                    onChange={this.handlerChange}/>


                                {/* <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                                    </div>
                                    <input className="form-control" placeholder="Password" type="password" />
                                </div> */}
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
                {loading && <EclipseWidget />}
            </>
        );
    }
}

export default RegisterPage;