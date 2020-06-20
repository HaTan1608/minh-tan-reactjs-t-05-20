
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Layout from "../../components/Layout";
import loginAccountAction from "./Login.action";

function Login(props) {
  const [valueLogin, setValueLogin] = useState({ email: "", password: "" });
  const [errMessage, setErrMessage] = useState("");
  const history = useHistory();
  console.log(history)
  const onChangeValue = (e) => {
    setValueLogin({
      ...valueLogin,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      await props.loginAccount(valueLogin);
      if (history.location.state.from.pathname) {
        if(history.location.state.from.pathname==='/login'){
          history.push('/')
        }
        else{
        history.push(history.location.state.from.pathname);
        }
      }
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    setErrMessage(props.error);
  }, [props.error]);

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
                  <h1>Login</h1>
                  <ul className="breadcrumb-menu">
                    <li>
                      <a href="index.html">home</a>
                    </li>
                    <li>
                      <span>Login</span>
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
                  <h3 className="text-center mb-60">Login From Here</h3>
                  <form action="#" onSubmit={onSubmitLogin}>
                    <span className="text-danger">{errMessage}</span>
                    <label htmlFor="name">
                      Email Address <span>**</span>
                    </label>
                    <input
                      name="email"
                      id="name"
                      type="email"
                      placeholder="Enter Username or Email address..."
                      onChange={onChangeValue}
                    />
                    <label htmlFor="pass">
                      Password <span>**</span>
                    </label>
                    <input
                      name="password"
                      id="pass"
                      type="password"
                      placeholder="Enter password..."
                      onChange={onChangeValue}
                    />
                    <div className="login-action mb-20 fix">
                      <span className="log-rem f-left">
                        <input id="remember" type="checkbox" />
                        <label htmlFor="remember">Remember me!</label>
                      </span>
                      <span className="forgot-login f-right">
                        <a href="#">Lost your password?</a>
                      </span>
                    </div>
                    <button className="btn theme-btn-2 w-100">Login Now</button>
                    <div className="or-divide">
                      <span>or</span>
                    </div>
                    <Link to={`/register`} className="btn theme-btn w-100">
                      Register Now
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
    error: state.loginReducer.error,
  };
};

const mapDispatchToProps = {
  loginAccount: loginAccountAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);