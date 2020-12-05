import { FC } from "react";
import { Ingredients, Instructions } from "../organisms";

interface IProps {
  title: string;
  amount: number;
  unit: string;
  ingredients: Array<(number | string)[]>; // TODO: Should be tuple, [number, string, string]
  instructions: string[];
}

const Recipe: FC<IProps> = ({
  title,
  amount,
  unit,
  ingredients,
  instructions,
}: IProps) => {
  return (
    <main className="container mx-auto">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div>
        {amount} {unit}
      </div>
      <Ingredients ingredients={ingredients} />
      <Instructions instructions={instructions} />
    </main>
  );
};

export default Recipe;
