import { ComponentTitle } from "../atoms";

interface IProps {
  ingredients: Array<(number | string)[]>; // TODO: Should be of type, Array<[number, string, string]>;
}

const Ingredients = function Ingredients({ ingredients }: IProps): JSX.Element {
  return (
    <div className="max-w-xl mb-4">
      <ComponentTitle title="Ingredienser" />
      <div className="grid grid-cols-2">
        {ingredients.map(([amount, unit, text]) => (
          <div key={text}>
            {amount > 0 && (
              <>
                {amount}&nbsp;{unit}&nbsp;
              </>
            )}
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ingredients;
