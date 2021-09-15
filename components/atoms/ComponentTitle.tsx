interface IProps {
  title: string;
}

const Button = ({ title }: IProps): JSX.Element => (
  <h3 className="text-xl font-bold">{title}</h3>
);

export default Button;
