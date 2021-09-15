import { Recipe } from "../components/templates";

const title = "Cacio e Pepe";
const amount = 1;
const unit = "portion";

const ingredients = [
  [170, "g", "spaghetti"],
  [7, "dl", "vatten"],
  [0, "", "salt"],
  [0, "", "svartpeppar"],
  [70, "g", "Riven Pecorino"],
];

const instructions = [
  "Mät upp ca 170 gram pasta per portion",
  "Lägg ned pastan i en stekpanna och häll på vattnet.",
  "Salta vattnet",
  "Koka pastan tills nästan allt vatten är bortkokat, eller minst den tid som är angiven på pastan.",
  "Tillsätt svartpeppar",
  "Tillsätt Pecorinon",
  "Servera och njut",
];

const RecipePage = (): JSX.Element => (
  <Recipe
    title={title}
    amount={amount}
    unit={unit}
    ingredients={ingredients}
    instructions={instructions}
  />
);

export default RecipePage;
