import { FC } from "react";
import { Recipe } from "../components/templates";

const title = "Chokladbollar";
const amount = 15;
const unit = "st";
const timeInMinutes = 20;

const ingredients = [
  [1, "dl", "socker"],
  [3.5, "dl", "havregryn"],
  [0.5, "dl", "kakao"],
  [1, "msk", "vaniljsocker"],
  [1, "msk", "kaffe"],
  [1.5, "dl", "kokosflingor"],
  [100, "g", "smör"],
];

const instructions = [
  "Lägg alla ingredienser i en skål",
  "Häll upp kokosflingor på en tallrik",
  "Knåda ingredienserna till en massa",
  "Rulla till runda bollar och rulla dessa i kokosflingor",
  "Sätt in i frysen ca 15 minuter",
];

const RecipePage: FC = () => {
  return (
    <Recipe
      title={title}
      amount={amount}
      unit={unit}
      timeInMinutes={timeInMinutes}
      ingredients={ingredients}
      instructions={instructions}
    />
  );
};

export default RecipePage;
