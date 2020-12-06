import { FC } from "react";
import { Recipe } from "../components/templates";

const title = "Pastapanna med kyckling, paprika och citron";
const amount = 4;
const unit = "portioner";

const ingredients = [
  [300, "g", "pasta"],
  [1, "st", "färdiggrillad kyckling"],
  [1, "st", "purjolök"],
  [1, "st", "röd paprika"],
  [1, "st", "gul paprika"],
  [2, "msk", "olivolja"],
  [2, "krm", "salt"],
  [1, "krm", "peppar"],
  [1, "dl", "finhackad persilja"],
  [1, "st", "citronskal"],
  [2, "msk", "färskpressad citronjuice"],
];

const instructions = [
  "Koka 200g pasta, t ex tagliatelle, enligt anvisningar på förpackningen.",
  "Plocka köttet av kycklingen och skär det i mindre bitar/strimlor.",
  "Ansa och strimla purjolöken.",
  "Dela, kärna ur och strimla paprikorna.",
  "Fräs purjolök och paprika i olivolja i en stor stekpanna ca 3 minuter. Krydda med salt och peppar.",
  "Häll av pastan och blanda med kyckling, paprikafräs, finhackad persilja, finrivet citronskal och färskpressad citronjuice.",
  "Smaka av med salt och peppar.",
];

const RecipePage: FC = () => {
  return (
    <Recipe
      title={title}
      amount={amount}
      unit={unit}
      ingredients={ingredients}
      instructions={instructions}
    />
  );
};

export default RecipePage;
