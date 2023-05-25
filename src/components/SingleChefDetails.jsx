import React from "react"
import { useLoaderData } from "react-router-dom"
import Food from "./Food"

const SingleChefDetails = () => {
  const data = useLoaderData()
  const {
    chef_name,
    chef_picture,
    chef_description,
    like,
    years_of_experience,
    num_recipes,

    recipes,
  } = data

  return (
    <div>
      <div className="flex justify-between m-4 items-center">
        <div className="w-3/6">
          <img className="rounded  p-12" src={chef_picture} alt="Chef" />
        </div>
        <div className="w-3/6 p-8 text-2xl flex flex-col gap-4 ">
          <p>Name:{chef_name}</p>
          <p>Description:{chef_description}</p>
          <p>Experience:{years_of_experience}</p>
          <p>Number Of Recipes:{num_recipes}</p>
          <p>Likes:{like}</p>
        </div>
      </div>
      <div className="grid grid-cols-3 place-items-center">
        {recipes.map((food,index) => <Food food={food} key={index}></Food>)}
      </div>
    </div>
  )
}

export default SingleChefDetails
