import React, { useState } from "react";
import RecipeList from "./RecipeList";
import RecipeDetail from "./RecipeDetail";

const Recipes = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="">
      <div className="container mx-auto px-6 py-0">
        {selected ? (
          <RecipeDetail recipe={selected} onBack={() => setSelected(null)} />
        ) : (
          <RecipeList onSelect={setSelected} />
        )}
      </div>
    </div>
  );
};

export default Recipes;
