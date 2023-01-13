import axios from "axios";

const COCKTAIL_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:8080/api/cocktail";

export function getCocktails() {
  return axios
    .get(COCKTAIL_BASE_URL)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}
