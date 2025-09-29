import React from "react";

const RecipeCard = ({ recipe, onClick }) => {
  return (
    <div 
      onClick={onClick} 
      className="cursor-pointer bg-white rounded-lg shadow hover:shadow-lg transition p-4"
    >
      <img 
        src={recipe.image} 
        alt={recipe.title} 
        className="w-full h-40 object-cover rounded-md mb-3"
      />
      <h4 className="font-semibold text-lg text-gray-800">{recipe.title}</h4>
    </div>
  );
};

export default RecipeCard;
