import React, { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"
import { Navigate, useLocation } from "react-router-dom"
import Loading from "../components/Loading"

const PrivetRout = ({ children }) => {
  const { user,setLoading,loading } = useContext(AuthContext)
  const location = useLocation()
  if(loading){
    return <Loading></Loading>
  }
  if (user) {
    return children
  }
  return <Navigate state={{ from: location }} replace to="/login"></Navigate>
}

export default PrivetRout
