import { FC } from "react";
import Link from "next/link";

interface RecipeTitleType {
  title: string;
  path: string;
}

interface IProps {
  recipeTitles: RecipeTitleType[];
}

const RecipeList: FC<IProps> = ({ recipeTitles }: IProps) => {
  return (
    <div>
      <div className="mb-2 mx-auto">
        <label htmlFor="search">
          <span className="block">Sök recept</span>
          <input
            type="text"
            id="search"
            name="search"
            className="border border-gray-400 w-full px-3 py-1 rounded-sm"
            placeholder="Världens bästa våfflor"
          />
        </label>
      </div>
      <ul className="text-center">
        {recipeTitles.map((recipeTitle) => (
          <li
            key={recipeTitle.path}
            className="text-2xl bg-yellow-500 mb-1 text-white py-1 rounded-sm hover:bg-yellow-600"
          >
            <Link href={recipeTitle.path}>{recipeTitle.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
