import { Recipe } from "../components/templates";

const title = "Hamburgare";
const timeInMinutes = 30;

const ingredients = [
  [0, "", "nötfärs"],
  [0, "", "salladsblad"],
  [0, "", "rödlök"],
  [0, "", "tomat"],
  [0, "", "olivolja"],
  [0, "", "vinäger"],
  [0, "", "salt"],
  [0, "", "svartpeppar"],
  [0, "", "socker"],
  [0, "", "hamburgerbröd"],
];

const instructions = [
  "Blanda färsen med grovmalen svartpeppar, 1 krm salt och 1 msk vatten per 100 g färs, forma till varsin hamburgare och låt vila i kylen på en plåt.",
  "Skiva tomat och rödlök, varva i en skål med olivolja, vinäger, salt, svartpeppar och en gnutta socker. Spara ett par skivor av varje att toppa hamburgaren med.",
  "Skär brödet i två skivor per person, stek skivorna i smör, salta och peppra på båda sidor.",
  "Stek hamburgarna på båda sidor i smör tills de är genomstekta.",
  "Bygg din hamburgare med bröd, sallad, dressing, burgare, tomat och lök.",
  "Servera med tomatsalladen vid sidan av.",
];

const RecipePage = (): JSX.Element => (
  <Recipe
    title={title}
    timeInMinutes={timeInMinutes}
    ingredients={ingredients}
    instructions={instructions}
  />
);

export default RecipePage;
