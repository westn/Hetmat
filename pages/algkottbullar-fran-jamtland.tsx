import { Recipe } from "../components/templates";

const title = "Älgköttbullar från Jämtland";
const amount = 8;
const unit = "portioner";
const timeInMinutes = 60;

const ingredients = [
  [1, "st", "gul lök"],
  [1, "msk", "smör eller margarin till stekning"],
  [8, "st", "enbär"],
  [1, "kg", "älgfärs"],
  [2, "dl", "vispgrädde"],
  [1, "msk", "salt"],
  [0.5, "tsk", "mald vitpeppar"],
];

const instructions = [
  "Skala och finhacka löken. Fräs löken i matfettet i en stekpanna ca 5 min. Låt löken kallna på ett fat.",
  "Krossa enbären i en mortel. Blanda färsen smidig med grädde, ägg, lök, enbär, salt, timjan och peppar.",
  "Forma färsen till små, runda köttbullar som läggs på en vattensköljd skärbräda.",
  "Hetta upp lite av matfettet i en stekpanna. När det är ljusgult och slutat skumma läggs några av köttbullarna i och får steka runt om 6-8 min.",
  "Ta upp köttbullarna på ett fat så länge och stek resterande köttbullar.",
  "Serveras bäst med nykokt potatis och brunsås",
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
