import React, { useContext, useState } from "react"
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from "../provider/AuthProvider"

const Login = () => {
  const { signInUser, setUser, loginWithGoogle, loginGitHub } =
    useContext(AuthContext)
  const [wrong, setWrong] = useState("")
  const [correct, setCorrect] = useState("")
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || "/"

  //handle login with email address and pass===================
  const handleLogin = (event) => {
    event.preventDefault()

    const form = event.target
    const email = form.email.value
    const password = form.password.value
 
    if (!email) {
      setWrong("Please Enter Your Email ")
      console.log("ud")
      return
    } else if (!password) {
      setWrong("Please Enter Your  password")
      return
    }
    if (password.length < 6) {
      setWrong("Password must be greater then 6 character")
      return
    }

    signInUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user

        
        setUser(user)
        form.reset()
        setCorrect("User Login Successfully")
        setWrong("")
        navigate(from, { replace: true })
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message

        if (errorMessage == "Firebase: Error (auth/user-not-found).") {
          setWrong("User Not found")
          return
        }
        setWrong("Wrong Password")
      })
  }

  //handle login with google===============

  const handleLoginGoogle = () => {
    setWrong("")
    loginWithGoogle()
      .then((result) => {
        const user = result.user

    
        navigate(from, { replace: true })
      })
      .catch((error) => {
       
        const errorMessage = error.message
        setWrong(errorMessage)
      })
  }

  //log in with gitHub=============
  const handleGitHubLogin = () => {
    loginGitHub()
      .then((result) => {
        const user = result.user
        console.log(user)
       
        navigate(from, { replace: true })
      })
      .catch((error) => {
        const errorMessage = error.message
        
      })
  }

  return (
    <div>
      <div className="hero h-full my-8 bg-base-200">
        <form onSubmit={handleLogin} className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login here now!</h1>
            <p className="text-red-500 mt-4">{wrong}</p>
            <p className="text-green-500 mt-4">{correct}</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </div>
            <label className="label">
              <p>
                If you are not register yet go to ,
                <Link className="underline text-blue-500" to="/register">
                  Register
                </Link>
              </p>
            </label>
          </div>
        </form>
      </div>
      <div className="flex flex-col items-center gap-4 my-4">
        <button onClick={handleLoginGoogle} className="btn btn-info w-48">
          Login With Google
        </button>
        <button onClick={handleGitHubLogin} className="btn btn-success w-48">
          Login With Github
        </button>
      </div>
    </div>
  )
}

export default Login
