import { render, fireEvent } from "@testing-library/react";
import RecipeList from "./RecipeList";

const exampleTitles = [
  { title: "Världens bästa våfflor", path: "/varldens-basta-vafflor" },
  { title: "Chokladglass", path: "/chokladglass" },
  { title: "Chokladbollar", path: "/chokladbollar" },
];

it("should find världens bästa våfflor", async () => {
  const { getAllByTestId, getByTestId } = render(
    <RecipeList recipeTitles={exampleTitles} />
  );
  const searchField = getByTestId("searchfield");

  fireEvent.change(searchField, { target: { value: "världens" } });

  const buttons = getAllByTestId("recipebutton");
  expect(buttons.length).toBe(1);
});
