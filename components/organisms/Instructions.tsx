import { FC } from "react";
import { ComponentTitle } from "../atoms";

interface IProps {
  instructions: string[];
}

const Instructions: FC<IProps> = ({ instructions }: IProps) => {
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
