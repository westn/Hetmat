import { FC } from "react";

interface IProps {
  instructions: string[];
}

const Instructions: FC<IProps> = ({ instructions }: IProps) => {
  return (
    <div>
      {instructions.map((instruction, index) => (
        <div key={instruction}>
          {index + 1}. {instruction}
        </div>
      ))}
    </div>
  );
};

export default Instructions;
