import Head from "next/head";

import Pagination from "../components/Pagination";
import Card from "../components/Card";
import Logo from "../components/Logo";

import client from "../graphql/client";
import { getPages } from "../graphql/queries";

import { v4 } from "uuid";

export async function getServerSideProps(context) {
  let { data } = await client.query(getPages(+context.query.page));
  return {
    props: {
      animeList: data?.Page,
    },
  };
}

export default function Home({ animeList }) {
  const pageList = animeList.media.map((el) => <Card key={el.id} data={el} />);

  const dummy = new Array(6)
    .fill(0)
    .map((el) => <div key={v4()} className="w-[300px] mx-4"></div>);

  return (
    <div>
      <Head>
        <title>Anilist</title>
        <meta name="description" content="Anime list website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Logo />
      <div className="flex flex-wrap justify-around mt-16">
        {pageList}
        {dummy}
      </div>
      <Pagination />
    </div>
  );
}
