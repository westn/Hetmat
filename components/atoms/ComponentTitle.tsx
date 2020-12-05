import { FC } from "react";

interface IProps {
  title: string;
}

const Button: FC<IProps> = ({ title }: IProps) => {
  return <h3 className="text-xl font-bold">{title}</h3>;
};

export default Button;
