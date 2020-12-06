import { ChangeEvent, FC, useCallback, useState } from "react";
import { SearchField, RecipeList as RecipeListMolucule } from "../molecules";
import { RecipeTitleType } from "../../types/RecipeTitleType";

interface IProps {
  recipeTitles: RecipeTitleType[];
}

const RecipeList: FC<IProps> = ({ recipeTitles }: IProps) => {
  const [filteredRecipeTitles, setFilteredRecipeTitles] = useState(
    recipeTitles
  );
  const searchRecipes = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const cmpString = event.target.value.toLocaleLowerCase();
      setFilteredRecipeTitles(
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
      <RecipeListMolucule recipeTitles={filteredRecipeTitles} />
    </div>
  );
};

export default RecipeList;
