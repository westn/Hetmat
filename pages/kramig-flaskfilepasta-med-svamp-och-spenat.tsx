import { Recipe } from "../components/templates";

const title = "Krämig fläskfilépasta med svamp och spenat";
const amount = 4;
const unit = "portioner";
const timeInMinutes = 15;

const ingredients = [
  [500, "g", "spagetti"],
  [500, "g", "fläskfilé"],
  [1, "st", "gul lök"],
  [3, "st", "vitlöksklyftor"],
  [200, "g", "champinjoner"],
  [70, "g", "spenat"],
  [3, "dl", "grädde"],
  [1, "dl", "riven parmesan"],
  [1, "tsk", "salt"],
  [2, "nypor", "svartpeppar"],
  [1, "msk", "raps eller olivolja"],
  [1, "msk", "smör"],
];

const instructions = [
  "Koka spagetti enligt anvisning på paketet.",
  "Putsa fläskfilén från senor och skär den i strimlor.",
  "Skala och finhacka 1 gul lök och 3 st vitlöksklyftor.",
  "Skär champinjonerna i tunna skivor.",
  "Hetta upp en panna med 1 msk olja och en klick smör.",
  "Fräs lök och champinjoner i ca 5 min tills svampen har fått ordentligt med färg.",
  "Tillsätt fläskfilén och 1 tsk salt och bryn tills den är genomstekt.",
  "Slå på grädde och låt det puttra tills pastan är klar.",
  "Sila av pastan och blanda med fläskfilén.",
  "Skölj spenaten och vänd ner den på slutet.",
  "Smaka av med svartpeppar från kvarn.",
  "Servera med 1 dl riven parmesanost.",
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
