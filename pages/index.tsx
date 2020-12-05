import Head from "next/head";
import { FC } from "react";
import { Button, Text } from "../components";

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Hetmat</title>
      </Head>
      <div className="bg-white shadow p-3 rounded lg:w-64 mx-auto mt-8">
        <div>
          <div className="bg-cover bg-center bg-gray-300 h-32 rounded" />
        </div>
        <div className="mt-6">
          <p
            className="text-lg text-bold tracking-wide text-gray-600 mb-2"
            data-test="title"
          >
            Recepttitle
          </p>
          <p className="text-sm text-gray-600 font-hairline">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="mt-6">
          <Button />
          <Text />
        </div>
      </div>
    </>
  );
};

export default Home;
