import { ChangeEvent, FC } from "react";

interface IProps {
  searchAction: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchField: FC<IProps> = ({ searchAction }: IProps) => {
  return (
    <label htmlFor="search">
      <span className="block">Sök recept</span>
      <input
        type="text"
        id="search"
        name="search"
        className="border border-gray-400 w-full px-3 py-1 rounded-sm"
        placeholder="Världens bästa våfflor"
        onChange={searchAction}
      />
    </label>
  );
};

export default SearchField;
