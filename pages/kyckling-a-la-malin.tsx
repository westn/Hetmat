import { FC } from "react";
import { Recipe } from "../components/templates";

const title = "Kyckling à la Malin";
const amount = 4;
const unit = "portioner";
const timeInMinutes = 40;

const ingredients = [
  [1, "kg", "kyckling"],
  [3, "msk", "kinesisk soja"],
  [2, "krm", "mald vitpeppar"],
  [1, "st", "gul lök"],
  [200, "g", "färska kantareller"],
  [2, "dl", "vatten"],
  [2, "dl", "crème fraiche"],
  [1, "tsk", "torkad timjan"],
  [1, "msk", "krossade enbär"],
  [3, "msk", "råsocker"],
  [0, "", "vetemjöl"],
];

const instructions = [
  "Ugn: 225°",
  "Skär kycklingfiléerna i mindre bitar och lägg dem i en gryta. Krydda med peppar.",
  "Häll på sojan och rör ordentligt.",
  "Låt stå i 15 min.",
  "Skala och skär löken i ganska stora bitar.",
  "Blanda med köttet.",
  "Ansa och lägg i de färska kantarellerna svampen med sitt spad över filéer och lök och sjud i cirka 10 min.",
  "Tillsätt timjan, enbär, råsocker och crème fraiche.",
  "Sjud i ytterligare 10 min.",
  "Smaka av och krydda om så behövs. Tycker du att såsen är för tunn kan du reda av med lite vetemjöl utrört i vatten.",
  "Servera med t ex hasselbackspotatis, gröna ärtor...",
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
