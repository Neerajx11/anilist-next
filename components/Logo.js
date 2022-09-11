import { useRouter } from "next/router";
import React from "react";

const Logo = () => {
  const router = useRouter();
  const goHome = () => router.push("/");
  return (
    <p
      onClick={goHome}
      className="cursor-pointer text-5xl text-center font-bold mb-8 mt-4"
    >
      Anime List
    </p>
  );
};

export default Logo;
