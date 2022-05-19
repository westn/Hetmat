import { Link } from "../atoms";
import { RecipeTitleType } from "../../types/RecipeTitleType";

interface IProps {
  recipeTitles: RecipeTitleType[];
}

const RecipeList = function RecipeList({ recipeTitles }: IProps): JSX.Element {
  return (
    <ul className="text-center">
      {recipeTitles.map((recipeTitle) => (
        <li key={recipeTitle.path}>
          <Link
            href={recipeTitle.path}
            className="w-full text-2xl bg-orange-700 mb-1 text-white rounded-sm hover:bg-orange-800 p-2 block focus:outline-black"
            dataTest="recipebutton"
          >
            {recipeTitle.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;
