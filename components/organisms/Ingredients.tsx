import { FC } from "react";

interface IProps {
  ingredients: Array<(number | string)[]>; // TODO: Should be tuple, [number, string, string]
}

const Ingredients: FC<IProps> = ({ ingredients }: IProps) => {
  return (
    <div>
      {ingredients.map(([amount, unit, text]) => (
        <div key={text}>
          {amount} {unit} {text}
        </div>
      ))}
    </div>
  );
};

export default Ingredients;
