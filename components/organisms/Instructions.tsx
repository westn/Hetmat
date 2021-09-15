import { ComponentTitle } from "../atoms";

interface IProps {
  instructions: string[];
}

const Instructions = ({ instructions }: IProps): JSX.Element => (
  <div>
    <ComponentTitle title="Instruktioner" />
    <ol className="list-decimal list-inside">
      {instructions.map((instruction) => (
        <li key={instruction}>{instruction}</li>
      ))}
    </ol>
  </div>
);

export default Instructions;
