import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./Layout/MainLayout.jsx"
import Home from "./components/Home.jsx"
import Login from "./components/Login.jsx"
import Register from "./components/Register.jsx"
import Blog from "./components/Blog.jsx"
import SingleChefDetails from "./components/SingleChefDetails.jsx"
import ErrorPage from "./components/ErrorPage.jsx"
import AuthProvider from "./provider/AuthProvider.jsx"
import PrivetRout from "./PrivetRout/PrivetRout.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "chef/:id",
        element:<PrivetRout> <SingleChefDetails></SingleChefDetails></PrivetRout>,
        loader: ({ params }) =>
          fetch(`https://recipes-server-site-tanzimnahid6.vercel.app/chef/${params.id}`),
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)
