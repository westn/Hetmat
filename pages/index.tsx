import Head from "next/head";
import RecipeList from "../components/organisms/RecipeList";

const recipeTitles = [
  { title: "Världens bästa våfflor", path: "/varldens-basta-vafflor" },
  { title: "Tacokrydda", path: "/tacokrydda" },
  { title: "Chokladbollar", path: "/chokladbollar" },
  { title: "Hamburgare", path: "/hamburgare" },
  { title: "Kyckling à la Malin", path: "/kyckling-a-la-malin" },
  { title: "Ugnsbakad lax med pesto", path: "/ugnsbakad-lax-med-pesto" },
  { title: "Fläskfilé i färskostsås", path: "/flaskfile-i-farskostsas" },
  {
    title: "Pastapanna med kyckling, paprika och citron",
    path: "/pastapanna-med-kyckling-paprika-och-citron",
  },
  {
    title: "Krämig fläskfilépasta med svamp och spenat",
    path: "/kramig-flaskfilepasta-med-svamp-och-spenat",
  },
  {
    title: "Älgköttbullar från Jämtland",
    path: "/algkottbullar-fran-jamtland",
  },
];

const Home = (): JSX.Element => (
  <>
    <Head>
      <title>Hetmat</title>
    </Head>
    <main className="container mx-auto max-w-2xl px-4 pb-2">
      <RecipeList recipeTitles={recipeTitles} />
    </main>
  </>
);

export default Home;
