import React from "react";
import { Section, ValueContainer } from "./styles";

function Values() {
  return (
    <Section className="relative">
      <img
        src="picture5.png"
        alt="retangulo verde"
        className="absolute -z-10  md:block sm:hidden hidden pic-md"
      />
      <img
        src="picture6.png"
        alt="retangulo verde"
        className="absolute -z-10 top-5 md:hidden sm:block h-full"
      />
      <ValueContainer className="container mx-auto p-2  z-20s md:text-left sm:text-center text-center ">
        <div className="values-text ">
          <h2 className="text-black-200 mt-10 font-bold font-nunito text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est a
            imperdiet id lobortis.
          </h2>
          <p className="text-base mt-4 text-white font-nunito leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus risus
            nulla pharetra etiam odio cursus. Pulvinar sit cum malesuada nisl
            sed. Quis eros malesuada venenatis{" "}
          </p>

          <button className="bg-white font-nunito font-medium text-green-400 rounded-full p-3 mt-4 w-40">
            Visite a Loja
          </button>
        </div>
        <div>
          <img
            src="/hand.png"
            alt="imagem de uma mão com livro"
            className="object-cover  md:h-4/6 sm:h-5 "
          />
        </div>
      </ValueContainer>
    </Section>
  );
}

export default Values;
