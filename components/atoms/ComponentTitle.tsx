interface IProps {
  title: string;
}

const ComponentTitle = function ComponentTitle({ title }: IProps): JSX.Element {
  return <h3 className="text-xl font-bold">{title}</h3>;
};

export default ComponentTitle;
