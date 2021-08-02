import {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import Head from "next/head";
import { TitleCardGroup } from "../components/title-card-group";

const Home = ({ recipes }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const items = recipes;

  return (
    <div className="bg-red-400 flex-auto">
      <Head>
        <title>Oh My Heart and Home</title>
      </Head>

      <TitleCardGroup title="Sample Card Group" items={items} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const res = await fetch("http://localhost:1337/recipes");
  const rawData = await res.json();

  const recipes = rawData.map(
    ({
      name,
      cover,
    }: {
      name: string;
      cover: {
        url: string;
        height: number;
        width: number;
        alternativeText: string;
      };
    }) => ({
      title: name,
      url: cover.url,
      alt: cover.alternativeText,
      width: cover.width,
      height: cover.height,
    })
  );

  return {
    props: {
      recipes,
    },
  };
};

export default Home;
