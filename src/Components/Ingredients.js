import React from "react";
import "../css/containers.css";

export default function Ingredients({ ingredients }) {
  return (
    <div className='ingredient-list'>
      {ingredients.map((ingredient, index) => (
        <>
          <h5>
            {index + 1}. {ingredient.name}
          </h5>
          <h5>{ingredient.amount} oz</h5>
        </>
      ))}
    </div>
  );
}
