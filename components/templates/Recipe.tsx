import { FC } from "react";
import Head from "next/head";

import { Ingredients, Instructions } from "../organisms";

interface IProps {
  title: string;
  amount?: number;
  unit?: string;
  timeInMinutes?: number,
  ingredients: Array<(number | string)[]>; // TODO: Should be tuple, [number, string, string]
  instructions: string[];
}

const Recipe: FC<IProps> = ({
  title,
  amount,
  unit,
  timeInMinutes,
  ingredients,
  instructions,
}: IProps) => {
  return (
    <>
      <Head>
        <title>{title} - Hetmat</title>
      </Head>
      <main className="container mx-auto max-w-2xl px-4 pb-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="italic text-sm">
          {!!amount && (
            <>
              {amount} {unit}
            </>
          )}
          {!!amount && !!timeInMinutes && <> - </>}
          {!!timeInMinutes && <>{timeInMinutes} minuter</>}
        </div>
        <Ingredients ingredients={ingredients} />
        <Instructions instructions={instructions} />
      </main>
    </>
  );
};

Recipe.defaultProps = {
  amount: undefined,
  unit: undefined,
  timeInMinutes: undefined,
};

export default Recipe;
