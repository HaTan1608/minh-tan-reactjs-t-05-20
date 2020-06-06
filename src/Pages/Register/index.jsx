import React, { useState , useContext } from "react";
import Layout from "../../components/Layout";
import { ThemeContext } from "../../"

function Register() {
  const value = useContext(ThemeContext)
  const [valueRegister, setValueRegister] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const onChangeFullName = (e) => {
    setValueRegister({ ...valueRegister, fullName: e.target.value });
  };
  const onChangeEmail = (e) => {
    setValueRegister({ ...valueRegister, email: e.target.value });
  };
  const onChangePassWord = (e) => {
    setValueRegister({ ...valueRegister, password: e.target.value });
  };
  const onSubmitRegister = (e) => {
    e.preventDefault();
    console.log(valueRegister);
  };
  return (
    <Layout productsInCart={[]}>
      <main style={{backgroundColor:value}}>
        {/* breadcrumb-area-start */}
        <section
          className="breadcrumb-area"
          style={{ backgroundImage: 'url("./assets/page-title.png")' }}
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
                  <h3 className="text-center mb-60">Signup From Here</h3>
                  <form action="#" onSubmit={onSubmitRegister}>
                    <label htmlFor="name">
                      Full Name <span>**</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Enter Username or Email address..."
                      onChange={onChangeFullName}
                    />
                    <label htmlFor="email-id">
                      Email Address <span>**</span>
                    </label>
                    <input
                      id="email-id"
                      type="text"
                      placeholder="Enter Username or Email address..."
                      onChange={onChangeEmail}
                    />
                    <label htmlFor="pass">
                      Password <span>**</span>
                    </label>
                    <input
                      id="pass"
                      type="password"
                      placeholder="Enter password..."
                      onChange={onChangePassWord}
                    />
                    <div className="mt-10" />
                    <button className="btn theme-btn-2 w-100">
                      Register Now
                    </button>
                    <div className="or-divide">
                      <span>or</span>
                    </div>
                    <button className="btn theme-btn w-100">login Now</button>
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

export default Register;