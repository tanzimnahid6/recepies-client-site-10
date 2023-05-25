import React from "react"
import ChefsDetails from "./ChefsDetails"
import CookingQuestion from "../ExtraSection/CookingQuestion"
import ContactUs from "../ExtraSection/ContactUs"

const Home = () => {
  return (
    <div >
      <div
        className="hero min-h-screen mb-10"
        style={{ backgroundImage: `url("/banner1.jpg")` }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-6xl  font-bold">HELLO CHEF</h1>
            <p className="mb-5  text-xl">
            The ultimate destination for foodies and culinary enthusiasts! Our chef is passionate about cooking and loves to share delicious and unique recipes that will tantalize your taste buds
            </p>
          </div>
        </div>
      </div>

      <ChefsDetails></ChefsDetails>
      <CookingQuestion></CookingQuestion>
      <ContactUs></ContactUs>
    </div>
  )
}

export default Home

//https://assets.telegraphindia.com/telegraph/2022/May/1652363323_dscf0128.jpg
