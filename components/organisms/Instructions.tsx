import { ComponentTitle } from "../atoms";

interface IProps {
  instructions: string[];
}

const Instructions = function Instructions({
  instructions,
}: IProps): JSX.Element {
  return (
    <div>
      <ComponentTitle title="Instruktioner" />
      <ol className="list-decimal list-inside">
        {instructions.map((instruction) => (
          <li key={instruction}>{instruction}</li>
        ))}
      </ol>
    </div>
  );
};

export default Instructions;
