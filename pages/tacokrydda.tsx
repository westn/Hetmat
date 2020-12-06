import { FC } from "react";
import { Recipe } from "../components/templates";

const title = "Tacokrydda";
const timeInMinutes = 5;

const ingredients = [
  [2, "msk", "chilipulver"],
  [2, "msk", "paprikapulver"],
  [2, "msk", "spiskummin"],
  [1, "msk", "salt"],
  [1, "krm", "cayennepeppar"],
  [1, "msk", "vitlök"],
];

const instructions = [
  "Blanda ihop ingredienserna i en skål.",
  "Använd 2 msk till 500 gram köttfärs.",
];

const RecipePage: FC = () => {
  return (
    <Recipe
      title={title}
      timeInMinutes={timeInMinutes}
      ingredients={ingredients}
      instructions={instructions}
    />
  );
};

export default RecipePage;
