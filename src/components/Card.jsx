import React from "react"
import { Link } from "react-router-dom"
import { LazyLoadImage } from "react-lazy-load-image-component"

const Card = ({ singleChef }) => {
  //   console.log(singleChef)
  const {
    chef_name,
    chef_picture,
    years_of_experience,
    num_recipes,
    id,
    like,
  } = singleChef
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        {/* <LazyLoadImage className="px-10 pt-10">
          <img src={chef_picture} alt="chef"className="rounded-xl w-80 h-80 object-cover"/>
        </LazyLoadImage> */}

        {/* Lazy load added */}
        <LazyLoadImage
          height={762}
          offset={300}
          threshold={0.95}
          className="rounded-xl w-full h-80 object-cover"
          src={chef_picture}
          width={chef_picture.width}
        />

        <div className="card-body items-center ">
          <h2 className="card-title">{chef_name}</h2>
          <p>Experience:{years_of_experience}</p>
          <p>Number Of Recipes:{num_recipes}</p>
          <p>Like:{like}</p>
          <Link to={`/chef/${id}`} className="card-actions">
            <button className="btn text-white btn-info font-bold">
              View Details{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card
