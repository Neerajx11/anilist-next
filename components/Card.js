import Image from "next/image";
import Link from "next/link";

import Genre from "./Genre";

import limitText from "../helper/limitText";
import { v4 } from "uuid";

const Card = ({ data }) => {
  return (
    <Link href={`/detail/${data.id}`}>
      <div
        data-id={data.id}
        style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
        className="m-4 w-[300px] h-[160px] rounded-md overflow-hidden cursor-pointer"
      >
        <div className="flex justify-between">
          <Image
            src={data.coverImage.large}
            alt={data.title.native}
            width="130px"
            height="200px"
            objectFit="cover"
          />
          <div className="w-[170px] p-2 bg-gray-100">
            <p className="font-bold h-11 ">
              {limitText(data.title.english || data.title.native, 30)}
            </p>
            <div className="mt-1 mb-4 text-sm">
              <span className="mr-1 font-semibold">Average Score</span>
              <span className="font-bold">{data.averageScore}</span>
            </div>
            <div className="flex flex-wrap">
              {data.genres.slice(0, 4).map((el) => (
                <Genre key={v4()} str={el} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
