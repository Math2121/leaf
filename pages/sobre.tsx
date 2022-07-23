import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { DynamicComponentWithNoSSR } from ".";
import Footer from "../components/Footer";
import { Intro } from "../components/Intro";

function Sobre() {
  return (
    <>
      <section className="container m-auto p-2">
        <DynamicComponentWithNoSSR />
      </section>

      <Intro title="A Editora" />

      <main className="container m-auto mt-10 p-2">
        <img src="leaf.png" alt="" className="m-auto opacity-25 h-20" />
        <p className="text-base text-gray-100 font-nunito leading-loose text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit illum
          corrupti exercitationem sequi, quo omnis neque qui atque minima
          numquam consequuntur provident reiciendis illo dolorum in vero.
          Expedita, reiciendis cupiditate.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Lacus risus nulla pharetra etiam odio
          cursus. Pulvinar sit cum malesuada nisl sed. Quis eros malesuada
          venenatis nec convallis egestas nibh. Sit elementum nulla ac in lacus
          aenean venenatis.
        </p>

        <div className="grid md:grid-cols-2 sm:grid-cols-1 mt-24 gap-5">
          <div className="flex flex-col sm:flex-row items-start gap-4  mb-5">
            <img
              src="aline.jpg"
              alt="Aline Reis"
              className="rounded-md filter grayscale"
            />
            <div>
              <h2 className="text-3xl font-bahnschrift text-green-400">
                Aline
              </h2>

              <p className="text-base text-gray-100 font-nunito leading-loose">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                illum corrupti exercitationem sequi, quo omnis neque qui atque
                minima numquam consequuntur provident reiciendis illo dolorum in
                vero. Expedita, reiciendis cupiditate.Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Lacus risus nulla pharetra
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-start gap-4  mb-5">
            <img
              src="aline.jpg"
              alt="Aline Reis"
              className="rounded-md filter grayscale"
            />
            <div>
              <h2 className="text-3xl font-bahnschrift text-green-400">
                Aline
              </h2>

              <p className="text-base text-gray-100 font-nunito leading-loose">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                illum corrupti exercitationem sequi, quo omnis neque qui atque
                minima numquam consequuntur provident reiciendis illo dolorum in
                vero. Expedita, reiciendis cupiditate.Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Lacus risus nulla pharetra
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Sobre;
