import { Link } from "../atoms";
import { RecipeTitleType } from "../../types/RecipeTitleType";

interface IProps {
  recipeTitles: RecipeTitleType[];
}

const RecipeList = ({ recipeTitles }: IProps): JSX.Element => (
  <ul className="text-center">
    {recipeTitles.map((recipeTitle) => (
      <li key={recipeTitle.path}>
        <Link
          href={recipeTitle.path}
          className="w-full text-2xl bg-yellow-600 mb-1 text-white rounded-sm hover:bg-yellow-700 p-2 block"
          dataTest="recipebutton"
        >
          {recipeTitle.title}
        </Link>
      </li>
    ))}
  </ul>
);

export default RecipeList;
