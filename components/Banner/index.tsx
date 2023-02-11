import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div className="w-full">
      <Image src="banner.png" alt="" className="object-cover w-full" />
    </div>
  );
}

export default Banner;
