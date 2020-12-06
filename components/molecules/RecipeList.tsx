import { FC } from "react";
import Link from "next/link";
import { RecipeTitleType } from "../../types/RecipeTitleType";

interface IProps {
  recipeTitles: RecipeTitleType[];
}

const RecipeList: FC<IProps> = ({ recipeTitles }: IProps) => {
  return (
    <ul className="text-center">
      {recipeTitles.map((recipeTitle) => (
        <li key={recipeTitle.path}>
          <Link href={recipeTitle.path}>
            <button
              type="button"
              className="w-full text-2xl bg-yellow-600 mb-1 text-white py-2 rounded-sm hover:bg-yellow-700"
              data-test="recipebutton"
            >
              {recipeTitle.title}
            </button>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;
