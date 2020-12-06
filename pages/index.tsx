import Head from "next/head";
import { FC } from "react";
import RecipeList from "../components/organisms/RecipeList";

const recipeTitles = [
  { title: "Världens bästa våfflor", path: "/varldens-basta-vafflor" },
  { title: "Tacokrydda", path: "/tacokrydda" },
  { title: "Chokladbollar", path: "/chokladbollar" },
];

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Hetmat</title>
      </Head>
      <main className="container mx-auto max-w-2xl px-4 pb-2">
        <RecipeList recipeTitles={recipeTitles} />
      </main>
      <footer className="container mx-auto max-w-2xl text-right text-xs px-4 pb-4">
        A Fredrik Nordell production
      </footer>
    </>
  );
};

export default Home;
