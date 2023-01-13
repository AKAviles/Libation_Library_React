import React, { useState, useEffect } from "react";
import { getCocktails } from "../Services/cocktailService";
import Ingredients from "./Ingredients";
import "../css/containers.css";

export default function Cocktails() {
  const [cocktailList, setCocktailList] = useState([]);

  useEffect(() => {
    getAllCocktails();
  }, [cocktailList]);

  async function getAllCocktails() {
    try {
      const response = await getCocktails();
      setCocktailList(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      {cocktailList.map((cocktail) => (
        <div className='card-body'>
          <h3>{cocktail.name}</h3>
          <h5>{cocktail.method}</h5>
          <h5>{cocktail.complexity}</h5>
          <h5>{cocktail.estCompletionTime} minutes</h5>
          <Ingredients ingredients={cocktail.ingredientList} />
        </div>
      ))}
    </div>
  );
}
