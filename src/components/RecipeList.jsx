import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import recipes from "../data/recipes";
import RecipeCard from "./RecipeCard";

const RecipeList = () => {
  const [topRecipes, setTopRecipes] = useState([]);
  const navigate = useNavigate();

  const categories = [...new Set(recipes.map((r) => r.category))];

  useEffect(() => {
    const shuffled = [...recipes].sort(() => 0.5 - Math.random());
    setTopRecipes(shuffled.slice(0, 4));
  }, []);

  return (
    <div className="py-0">
      <section className="bg-green-300 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            વાનગીઓ
          </h1>
          <p className="text-xl font-bold text-gray-600 max-w-2xl mx-auto">
            ખાના બનાને કી વિધિ
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-purple-900">
            ⭐ ટોચના રેટેડ વાનગીઓ
          </h2>
          <p className="text-gray-600 mt-2">
            બધી ઘણી વાનગીઓમાંથી, આ આપણા ચમકતા તારાઓ છે!
          </p>
        </div>

        {topRecipes.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {topRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onClick={() => navigate(`/recipe/${recipe.id}`)}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mb-12">
            No top-rated recipes available.
          </p>
        )}

        <h3 className="text-2xl font-semibold text-purple-800 mb-4 text-center">
          શ્રેણીઓ
        </h3>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.length > 0 ? (
            categories.map((cat) => (
              <button
                key={cat}
                onClick={() => navigate(`/category/${cat}`)}
                className="px-4 py-2 rounded-full border bg-gray-100 text-gray-700 
                           hover:bg-purple-600 hover:text-white transition"
              >
                {cat}
              </button>
            ))
          ) : (
            <p className="text-gray-500">No categories available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeList;
