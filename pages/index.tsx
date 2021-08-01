import Head from "next/head";
import { TitleCardGroup } from "../components/title-card-group";

const Home = () => {
  const items = Array.from({ length: 5 }, (_, i) => ({ title: `Item ${i}` }));

  return (
    <div className="bg-red-400 flex-auto">
      <Head>
        <title>Oh My Heart and Home</title>
      </Head>

      <TitleCardGroup title="Sample Card Group" items={items} />
    </div>
  );
};

export default Home;
