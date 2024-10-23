import React from "react";
import styles from './login.module.css';
import './page.css';
import { Link } from "react-router-dom";

const LoginPage = () => {
    return (
                <div className="login-page d-flex m-0">
                    <div className= {`col-sm-6 ${styles.row}`}>
                        <div className={`d-flex justify-content-center flex-column ${styles.loginImage}`}>
                            <h3>Welcome to Albany County</h3>
                            <p>Please Sign in into your account with the provided details to continue</p>
                        </div>
                    </div>
                    <div className={`col-sm-6 d-flex justify-content-center flex-column align-items-center ${styles.loginText} ${styles.row}`}>
                        <h2>Sign In to your account</h2>
                        <form className={`col-sm-6 d-flex justify-content-center flex-column align-items-center`}>
                            {/* <div className="form-group">
                                <input type="text" className="form-control" id="username" placeholder="Email address" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" id="password" placeholder="Password" />
                            </div> */}

                            <input type="text" id="fname" name="firstname" placeholder="Email address" />
                            <input type="text" id="lname" name="lastname" placeholder="Password" />
                            <Link to= '/'>Forgot Password ?</Link>
                            <button type="submit" className="btn btn-primary"><a href= '/dashboard/1'>Sign in</a></button>
                        </form>
                    </div>
                </div>


    )
};

export default LoginPage;