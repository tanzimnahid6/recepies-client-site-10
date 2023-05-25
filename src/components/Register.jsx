import React, { useContext, useState } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { AuthContext } from "../provider/AuthProvider"
import { getAuth, updateProfile } from "firebase/auth";
import app from "../../firebase.config";
const auth = getAuth(app)

const Register = () => {
  const { createUser,user,setUser,logout } = useContext(AuthContext)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const navigate = useNavigate()

  //handle Registration
  const handleRegistration = (event) => {
    event.preventDefault()

    const form = event.target
    const email = form.email.value
    const password = form.password.value
    const displayName = form.name.value
    const photoURL = form.photo.value
   
    if (password.length < 6) {
      setError("Password at least 6 character")
      setSuccess("")
      return
    }

    console.log(email, password)
    form.reset()
    setError("")
    setSuccess("User Create successfully")

    //create user with email and password
    createUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user

        console.log(user)
        // alert('User Created Done')
        updateUserData(user,displayName,photoURL)
        logout()
      

        // ...
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        setError(errorMessage)
        // ..
      })




    //update profile manually======*+*+*+*+*+*+*+*+*+*+**+*+*+
   const updateUserData = (user,displayName,photoURL)=>{
    updateProfile(user, {
        displayName: displayName, photoURL: photoURL
      }).then(() => {
    
      }).catch((error) => {
        // An error occurred
        // ...
        console.log(error);
      });

   }

   
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <form onSubmit={handleRegistration} className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Registration now!</h1>
          {/* Error message here */}
          <p className="text-red-600">{error}</p>
          <p className="text-green-600">{success}</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="Text"
                name="name"
                required
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="Text"
                name="photo"
                required
                placeholder="Photo"
                className="input input-bordered"
              />
            </div>
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
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Registration</button>
            </div>
          </div>
          <label className="label ">
            <p className="text-center">
              Already Register ?
              <NavLink className="underline text-blue-500" to="/login">
                Login
              </NavLink>
            </p>
          </label>
        </div>
      </form>
    </div>
  )
}

export default Register
