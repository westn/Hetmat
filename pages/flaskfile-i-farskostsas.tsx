import { Recipe } from "../components/templates";

const title = "Fläskfilé i färskostsås";
const amount = 4;
const unit = "portioner";
const timeInMinutes = 30;

const ingredients = [
  [600, "g", "fläskfilé"],
  [400, "g", "färskost"],
  [1, "st", "vitlöksklyfta"],
  [1, "dl", "grädde"],
  [3, "stänk", "soja"],
  [1, "st", "grönsaksbuljong"],
  [0, "", "salt & peppar"],
  [500, "g", "pasta"],
];

const instructions = [
  "Rensa och skär fläskfilén i avlånga bitar (stavar)",
  "Pressa vitlöksklyftan och bryn i olja, tillsätt fläskfilé bitarna och salt & peppar.",
  "Klicka i osten i pannan, häll i grädden och rör om tills osten smälter.",
  "Lägg i buljong tärningen och 2-3 stänk soja, rör om.",
  "Låt det koka en stund, 5-10 min, tillsätt mer soja efter smak och eventuellt mer grädde om såsen är för tjock.",
  "Servera med pasta och en trevlig sallad.",
];

const RecipePage = function RecipePage(): JSX.Element {
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
