import Image from "next/image";
import React from "react";

const CharacterCard = ({ data }) => {
  return (
    <div className="flex flex-col mx-2 text-center w-[150px] h-[200px]">
      <Image
        src={data.image.large}
        alt={data.name.full}
        width="100px"
        height="150px"
        objectFit="contain"
      />
      <span className="h-12">{data.name.full}</span>
    </div>
  );
};

export default CharacterCard;
