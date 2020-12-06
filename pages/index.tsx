import Head from "next/head";
import { FC } from "react";
import RecipeList from "../components/organisms/RecipeList";

const recipeTitles = [
  { title: "Världens bästa våfflor", path: "/varldens-basta-vafflor" },
  { title: "Tacokrydda", path: "/tacokrydda" },
  { title: "Chokladbollar", path: "/chokladbollar" },
  { title: "Hamburgare", path: "/hamburgare" },
  { title: "Ugnsbakad lax med pesto", path: "/ugnsbakad-lax-med-pesto" },
  { title: "Fläskfilé i färskostsås", path: "/flaskfile-i-farskostsas" },
  {
    title: "Älgköttbullar från Jämtland",
    path: "/algkottbullar-fran-jamtland",
  },
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
