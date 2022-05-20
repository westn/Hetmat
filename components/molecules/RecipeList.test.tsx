import { render } from "@testing-library/react";
import RecipeList from "./RecipeList";

const exampleTitles = [
  { title: "Världens bästa våfflor", path: "/varldens-basta-vafflor" },
  { title: "Tacokrydda", path: "/tacokrydda" },
  { title: "Chokladbollar", path: "/chokladbollar" },
];

it("should have a recipe with a printed title", () => {
  const { getAllByTestId } = render(
    <RecipeList recipeTitles={exampleTitles} />
  );
  const buttons = getAllByTestId("recipebutton");
  expect(buttons[0].textContent).toBe("Världens bästa våfflor");
});
