import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { v4 } from "uuid";

const Pagination = () => {
  const [curr, setCurr] = useState(0);
  const router = useRouter();

  useEffect(() => {
    console.log(+router.query.page || 1);
    setCurr((+router.query.page || 1) - 1);
  }, [router]);

  const clickDelegate = (e) => {
    if (e.target.hasAttribute("data-num")) {
      const val = e.target.getAttribute("data-num");

      setCurr(val);

      router.push({
        pathname: "/",
        query: { ...router.query, page: +val + 1 },
      });
    }
  };

  const dummy = new Array(12)
    .fill(0)
    .map((el) => <span className="w-[34px] mx-2" key={v4()}></span>);

  const NoList = new Array(100).fill(0).map((_, idx) => (
    <span
      data-num={idx}
      className={`bg-black border-2 border-solid cursor-pointer border-black text-white w-[34px] text-center m-2 rounded-md p-1 ${
        idx == curr && "bg-white text-black"
      }`}
      key={v4()}
    >
      {idx + 1}
    </span>
  ));

  return (
    <div
      className="flex flex-wrap p-1 justify-between mt-12"
      onClick={clickDelegate}
    >
      {NoList}
      {dummy}
    </div>
  );
};

export default Pagination;
