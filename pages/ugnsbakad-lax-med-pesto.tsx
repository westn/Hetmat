import { Recipe } from "../components/templates";

const title = "Ugnsbakad lax med pesto";
const amount = 5;
const unit = "portioner";
const timeInMinutes = 30;

const ingredients = [
  [450, "g", "lax"],
  [2, "msk", "pesto"],
  [0.5, "dl", "crème fraiche"],
  [35, "g", "pinjenötter"],
  [0, "", "salt"],
];

const instructions = [
  "Sätt ugnen på 180 grader.",
  "Rosta nötterna i en torr teflonpanna.",
  "Lägg laxfilén med skinnsidan nedåt i en ugnsform.",
  "Salta lätt.",
  "Blanda ihop pesto och crème fraiche. Smaka av med salt och peppar och bred över fisken.",
  "Stek i ugnen i cirka 15 minuter för rosa kärna och 25 minuter för helt genomstekt.",
  "Strö över pinjenötterna.",
];

const RecipePage = (): JSX.Element => (
  <Recipe
    title={title}
    amount={amount}
    unit={unit}
    timeInMinutes={timeInMinutes}
    ingredients={ingredients}
    instructions={instructions}
  />
);

export default RecipePage;
