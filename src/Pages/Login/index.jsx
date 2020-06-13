import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'


function Login() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: ""
  })

  const [errorMessage, setErrorMessage] = useState("")
  const history = useHistory()
  console.log(history, "history")

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(userInfo, "userInfo")
    login(userInfo)
  }

  const onChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    })
  }

  const login = async (data) => {
    setErrorMessage('')
    try {
      const result = await axios({
        method: "POST",
        url: "https://min-shop.herokuapp.com/rest/user/signIn",
        data
      });
  
      console.log(result.data);
      localStorage.setItem("token", result.data.accessToken)
      if(history.location.state.from.pathname) {
        history.push(history.location.state.from.pathname)
      } else {
        history.push('/')
      }
      
    } catch (error) {
      setErrorMessage(error.response.data.message)
    }
  }

  return (
    <Layout productsInCart={[]}>
      <main>
        {/* breadcrumb-area-start */}
        <section className="breadcrumb-area" style={{backgroundImage: 'url("./assets/page-title.png")'}}>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="breadcrumb-text text-center">
                  <h1>Login</h1>
                  <ul className="breadcrumb-menu">
                    <li><a href="index.html">home</a></li>
                    <li><span>Login</span></li>
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
                  <p className="text-danger">{errorMessage}</p>
                  <form onSubmit={onSubmit}>
                    <label htmlFor="name">Email Address <span>**</span></label>
                    <input name="email" id="name" type="text" placeholder="Enter Username or Email address..." onChange={onChange}/>
                    <label htmlFor="pass">Password <span>**</span></label>
                    <input name="password" id="pass" type="password" placeholder="Enter password..." onChange={onChange}/>
                    <div className="login-action mb-20 fix">
                      <span className="log-rem f-left">
                        <input id="remember" type="checkbox" />
                        <label htmlFor="remember">Remember me!</label>
                      </span>
                      <span className="forgot-login f-right">
                        <a href="#">Lost your password?</a>
                      </span>
                    </div>
                    <button type="submit" className="btn theme-btn-2 w-100">Login Now</button>
                    <div className="or-divide"><span>or</span></div>
                    <Link to="/register" className="btn theme-btn w-100">Register Now</Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* login Area End*/}
      </main>
    </Layout>
  )
}

export default Login