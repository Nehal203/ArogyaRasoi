import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import recipes from "../data/recipes";
import RecipeCard from "./RecipeCard";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();

  const filteredRecipes = recipes.filter(r => r.category === categoryName);
  return (
    <div className="container mx-auto px-6 py-10">
        <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
      >
        ← Back
      </button>
      <h2 className="text-3xl font-bold text-purple-900 mb-6">
        {categoryName} Recipes
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecipes.map(recipe => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            onClick={() => navigate(`/recipe/${recipe.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
