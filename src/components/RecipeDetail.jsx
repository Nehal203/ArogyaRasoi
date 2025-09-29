import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import recipes from "../data/recipes";

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <p className="text-center text-red-500 py-10">Recipe not found</p>;
  }

  return (
    <div className="container mx-auto px-6 py-10">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
      >
        ← Back
      </button>

      <h2 className="text-4xl font-bold text-purple-900 mb-6">
        {recipe.title}
      </h2>

      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full md:w-1/2 h-80 object-cover rounded-lg shadow-lg"
        />

        <div className="flex-1">
          <div className="flex items-center mb-6">
            <span className="text-yellow-500 text-xl mr-2">
              ⭐ {recipe.rating}
            </span>
            <span className="text-gray-600 text-sm">
              ({recipe.reviews} reviews)
            </span>
          </div>

          {recipe.description && (
            <p className="text-gray-700 leading-relaxed mb-6">
              {recipe.description}
            </p>
          )}

          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-purple-800 mb-2">
              Ingredients
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {recipe.ingredients.map((ing, idx) => (
                <li key={idx}>{ing}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-purple-800 mb-2">
              Instructions
            </h3>
            {Array.isArray(recipe.instructions) ? (
              <ul className="list-decimal list-inside text-gray-700 space-y-2">
                {recipe.instructions.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-700 leading-relaxed">
                {recipe.instructions}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
