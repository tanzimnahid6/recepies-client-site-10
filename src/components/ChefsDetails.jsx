import React, { useEffect, useState } from "react"
import Card from "./Card"

const ChefsDetails = () => {
  const [chefDetails, setChefDetails] = useState([])
  useEffect(() => {
    fetch("https://recipes-server-site-tanzimnahid6.vercel.app/chef")
      .then((res) => res.json())
      .then((data) => setChefDetails(data))
  }, [])

  return (
    <div className="grid  md:grid-cols-3  place-items-center ">
      {chefDetails.map((singleChef) => (
        <Card singleChef={singleChef} key={singleChef.id}></Card>
      ))}
    </div>
  )
}

export default ChefsDetails
