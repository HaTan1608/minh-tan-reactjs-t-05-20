  
import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { connect } from "react-redux";
import { Link, useHistory } from 'react-router-dom'
import { registerAccountAction } from "./Register.action";
function Register(props) {
  const [err, setErr] = useState("");
  const [valueRegister, setValueRegister] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const history = useHistory();

  const onChange = (e) => {
    setValueRegister({
      ...valueRegister,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmitRegister = async (e) => {
    e.preventDefault();
    try {
      await props.registerAccount(valueRegister);
      history.push("/login");
    } catch (err) {
      console.log(err);
      setErr(props.err);
    }
  };

  return (
    <Layout productsInCart={[]}>
      <main>
        {/* breadcrumb-area-start */}
        <section
          className="breadcrumb-area"
          style={{ backgroundImage: 'url("/assets/page-title.png")' }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="breadcrumb-text text-center">
                  <h1>Register</h1>
                  <ul className="breadcrumb-menu">
                    <li>
                      <a href="index.html">home</a>
                    </li>
                    <li>
                      <span>Register</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* breadcrumb-area-end */}
        {/* login Area Strat*/}
        <section className="login-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="basic-login">
                  <h3 className="text-center mb-60">Sign Up From Here</h3>
                  <form action="#" onSubmit={onSubmitRegister}>
                    <span className="text-danger">{err}</span>
                    <label htmlFor="name">
                      Full Name <span>**</span>
                    </label>
                    <input
                      name="username"
                      id="name"
                      type="text"
                      placeholder="Enter Username or Email address..."
                      onChange={onChange}
                    />
                    <label htmlFor="email-id">
                      Email Address <span>**</span>
                    </label>
                    <input
                      name="email"
                      id="email-id"
                      type="email"
                      placeholder="Enter Username or Email address..."
                      onChange={onChange}
                    />
                    <label htmlFor="pass">
                      Password <span>**</span>
                    </label>
                    <input
                      name="password"
                      id="pass"
                      type="password"
                      placeholder="Enter password..."
                      onChange={onChange}
                    />
                    <div className="mt-10" />
                    <button className="btn theme-btn-2 w-100">
                      Register Now
                    </button>
                    <div className="or-divide">
                      <span>or</span>
                    </div>
                    <Link to={`/login`} className="btn theme-btn w-100">
                      login Now
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* login Area End*/}
      </main>
    </Layout>
  );
}
const mapStateToProps = (state) => {
  return {
    err: state.registerReducer.error,
  };
};
const mapDispatchToProps = {
  registerAccount: registerAccountAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);