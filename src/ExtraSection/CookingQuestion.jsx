import React from "react"

const CookingQuestion = () => {
  return (
    <div>
      <div className="mx-8">
        <div className="container my-24 px-6 mx-auto">
          <section className="mb-32 text-gray-800">
            <h2 className="text-4xl text-cyan-500 font-bold mb-12 text-center">
              Frequently asked questions
            </h2>

            <div className="grid lg:grid-cols-3 gap-6">
              <div className="mb-12">
                <p className="font-bold mb-4">
                  What types of cuisine are featured on your website?
                </p>
                <p className="text-gray-500">
                  Our website features the best-selling recipes of 10 chefs from
                  Bangladesh, so you can expect to find a variety of traditional
                  Bangladeshi dishes as well as some fusion recipes that blend
                  different culinary influences.
                </p>
              </div>

              <div className="mb-12">
                <p className="font-bold mb-4">
                  Can I search for recipes by ingredient?
                </p>
                <p className="text-gray-500">
                  Yes! On our website you can find recipes that include specific
                  ingredients. This is a great way to use up ingredients you
                  have on hand or to find inspiration for new dishes to try.
                </p>
              </div>

              <div className="mb-12">
                <p className="font-bold mb-4">Are the recipes healthy?</p>
                <p className="text-gray-500">
                  We have tried to include a range of recipes that cater to
                  different dietary needs and preferences. Some recipes may be
                  healthier than others, so we encourage you to read the
                  nutritional information provided and make your own decisions
                  based on your individual needs.
                </p>
              </div>

              <div className="col-md-12 mb-12">
                <p className="font-bold mb-4">
                  How often are new recipes added to the website?
                </p>
                <p className="text-gray-500">
                  We aim to add new recipes on a regular basis to keep things
                  fresh and exciting for our users. However, the frequency of
                  new recipe additions may vary depending on a range of factors,
                  such as availability of new ingredients or the availability of
                  the chefs who have contributed their recipes to our website.
                </p>
              </div>

              <div className="mb-12">
                <p className="font-bold mb-4">
                  Can I leave a rating or review for a recipe?
                </p>
                <p className="text-gray-500">
                  Yes, we welcome user ratings and reviews for our recipes. This
                  feedback helps us improve the quality of our website and helps
                  other users determine which recipes they might like to try.
                </p>
              </div>

              <div className="mb-12">
                <p className="font-bold mb-4">
                  Are there any costs associated with using your website?
                </p>
                <p className="text-gray-500">
                  No, our website is completely free to use. We want to make our
                  collection of delicious recipes accessible to everyone,
                  regardless of their budget.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default CookingQuestion
