import { ChangeEvent, FC, useCallback, useState } from "react";
import Link from "next/link";
import { SearchField } from "../molecules";

interface RecipeTitleType {
  title: string;
  path: string;
}

interface IProps {
  recipeTitles: RecipeTitleType[];
}

const RecipeList: FC<IProps> = ({ recipeTitles }: IProps) => {
  const [filteredRecipes, setFilteredRecipes] = useState(recipeTitles);
  const searchRecipes = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const cmpString = event.target.value.toLocaleLowerCase();
      setFilteredRecipes(
        recipeTitles.filter(
          ({ title }) => title.toLocaleLowerCase().indexOf(cmpString) !== -1
        )
      );
    },
    [recipeTitles]
  );
  return (
    <div>
      <div className="mb-2 mx-auto">
        <SearchField searchAction={searchRecipes} />
      </div>
      <ul className="text-center">
        {filteredRecipes.map((recipeTitle) => (
          <li key={recipeTitle.path}>
            <Link href={recipeTitle.path}>
              <button
                type="button"
                className="w-full text-2xl bg-yellow-500 mb-1 text-white py-1 rounded-sm hover:bg-yellow-600"
              >
                {recipeTitle.title}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
