import React, { useState } from "react"
import toast, { Toaster } from "react-hot-toast"
import { Rating } from "@smastrom/react-rating"

import "@smastrom/react-rating/style.css"

const Food = ({ food }) => {
  const { recipe_name, cooking_method, ratings, ingredients } = food

  //handle button disabled
  const [value, setValue] = useState(false)

  const handleToast = () => {
    toast("Add to favorite")
    setValue(true)
  }

  return (
    <div>
      <div className="card bg-cyan-100 text-black w-96 h-96 my-8 ">
        <div className="card-body">
          <h2 className="card-title">{recipe_name}</h2>
          <p>
            <span className="font-bold">Cooking method:</span>
            {cooking_method}
          </p>
          <div className="flex items-center">
            
            <span className="text-xl">Ratings:</span>
            <Rating
              style={{ maxWidth: 120 }}
              value={ratings}
              readOnly
             
            />
          </div>
          <div>
            <h1>
              <span className="font-bold">Ingredients:</span>
              <br />[
              {ingredients.map((ingredient, i) => (
                <p key={i} className="inline">
                  {ingredient},
                </p>
              ))}
              ]
            </h1>
          </div>
          <div className="card-actions ">
            <button
              disabled={value}
              onClick={handleToast}
              className="btn btn-success"
            >
              Favorite
            </button>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  )
}

export default Food
