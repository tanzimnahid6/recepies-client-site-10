import React, { createContext, useEffect, useState } from "react"
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider
} from "firebase/auth"
import app from "../../firebase.config"
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const gitHubProvider = new GithubAuthProvider();

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  //create user with email and password
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  //login user by email and password
  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  //user signOut
  const logout = () => {
    setLoading(true)
    return signOut(auth)
  }

  //login with google
  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider)
  }

  //Login with gitHub==========
  const loginGitHub=()=>{
    return signInWithPopup(auth,gitHubProvider)

  }

  //user observations======================
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  const authInfo = {
    user,
    setUser,
    createUser,
    signInUser,
    logout,
    loading,
    setLoading,
    loginWithGoogle,
    loginGitHub
  }
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
