import { ReactNode } from "react";

import { Container } from "./styles";

export function Vision() {
  return (
    <Container>
      <section className="container mt-10 m-auto p-2">
        <div className="grid md:grid-cols-2 gap-4 items-center">
          <div className="flex items-start">
            <img src="picture4.png" alt="" className="object-cover" />
          </div>
          <div className="intro">
            <div className="mb-4">
              <span className="font-bahnschrift text-green-400 text-xl">
              Visão
              </span>
              <h2 className="text-black-100 font-bold font-nunito text-xl">
              Lorem ipsum dolor sit amet.
              </h2>
            </div>

            <p className="text-base mb-4 text-gray-100 font-nunito leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus risus nulla pharetra etiam odio cursus. Pulvinar sit cum malesuada nisl sed. Quis eros malesuada venenatis nec convallis egestas nibh. Sit elementum nulla ac in lacus aenean venenatis.
            </p>

            <p className=" text-base text-gray-100 font-nunito leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus risus nulla pharetra etiam odio cursus. Pulvinar sit cum malesuada nisl sed. Quis eros malesuada venenatis 
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
}
