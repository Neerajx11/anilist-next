import React from "react";
import Head from "next/head";
import Image from "next/image";

import CharacterCard from "../../components/CharacterCard";
import Genre from "../../components/Genre";
import Logo from "../../components/Logo";

import client from "../../graphql/client";
import { getPageDetail } from "../../graphql/queries";

import limitText from "../../helper/limitText";
import { v4 } from "uuid";

export async function getServerSideProps(context) {
  let { data } = await client.query(getPageDetail(+context.query.id));
  return {
    props: {
      pageData: data.Page.media[0],
    },
  };
}

const Detail = ({ pageData: data }) => {
  console.log(data);
  return (
    <div>
      <Head>
        <title>{data.title.english || data.title.native}</title>
        <meta name="description" content={data.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-4">
        <Logo />
        <p className="mt-16 mb-8 text-3xl font-bold">About</p>
        <div className="flex flex-col items-center md:flex-row md:items-start">
          <div className="w-8/12 text-center md:w-6/12">
            <Image
              src={data.coverImage.large}
              alt={data.title.native}
              width="300px"
              height="400px"
              objectFit="cover"
            />
          </div>
          <div className="w-10/12 mt-10 md:w-6/12 md:mt-0">
            <p className="mb-8 text-2xl font-semibold">
              {limitText(data.title.english || data.title.native)}
            </p>
            <div className="mt-1 mb-4 text-sm">
              <span className="mr-1 font-semibold">Average Score</span>
              <span className="font-bold">{data.averageScore}</span>
            </div>
            <div className="flex flex-wrap my-4">
              {data.genres.slice(0, 4).map((el) => (
                <Genre key={v4()} str={el} />
              ))}
            </div>
            <p className="mt-2 font-semibold">{data.description}</p>
          </div>
        </div>
        <div>
          <p className="mt-12 mb-8 text-3xl font-bold">Characters</p>
          <div className="flex flex-wrap justify-around">
            {data.characters.nodes.map((el) => (
              <CharacterCard key={v4()} data={el} />
            ))}
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Detail;
