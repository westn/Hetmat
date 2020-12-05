import { FC } from "react";
import { ComponentTitle } from "../atoms";

interface IProps {
  ingredients: Array<(number | string)[]>; // TODO: Should be tuple, [number, string, string]
}

const Ingredients: FC<IProps> = ({ ingredients }: IProps) => {
  return (
    <div className="max-w-xl mb-4">
      <ComponentTitle title="Ingredienser" />
      <div className="grid grid-cols-2">
        {ingredients.map(([amount, unit, text]) => (
          <div key={text}>
            {amount} {unit} {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ingredients;
