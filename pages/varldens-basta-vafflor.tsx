import { Recipe } from "../components/templates";

const title = "Världens bästa våfflor";
const amount = 4;
const unit = "st";

const ingredients = [
  [4, "dl", "vetemjöl"],
  [1, "tsk", "bakpulver"],
  [0.25, "tsk", "salt"],
  [2, "st", "äggulor"],
  [2, "st", "äggvitor"],
  [4, "dl", "mjölk"],
  [8, "msk", "rapsolja"],
];

const instructions = [
  "Rör samman vetemjöl, bakpulver och salt i en bunke. Gör sedan en urgröpning i mitten.",
  "Tag fram en ny liten bunke. Lägg försiktigt ner äggulorna i denna. Rör sedan ner mjölk och olja.",
  "Tillsätt all äggulemix samtidigt till den torra blandningen. Rör om tills den är fuktig (den bör vara klumpig)",
  "I en liten skål slå äggvitorna till hårt skum (tips står rakt upp).",
  "Vänd försiktigt äggvitan ner i mjöl- och ägguleblandningen, lämna några ludd med äggvita. Överblanda inte.",
  "Häll ned smeten i våffeljärnet, och se till att inte överfylla det.",
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
