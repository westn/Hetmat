import { FC } from "react";
import { Ingredients, Instructions } from "../organisms";

interface IProps {
  amount: number;
  unit: string;
  ingredients: Array<(number | string)[]>; // TODO: Should be tuple, [number, string, string]
  instructions: string[];
}

const Recipe: FC<IProps> = ({
  amount,
  unit,
  ingredients,
  instructions,
}: IProps) => {
  return (
    <div>
      <div>
        {amount} {unit}
      </div>
      <Ingredients ingredients={ingredients} />
      <Instructions instructions={instructions} />
    </div>
  );
};

export default Recipe;
