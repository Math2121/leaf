import type { NextPage } from "next";
import dynamic from "next/dynamic";

import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Values from "../components/Values";

import { Vision } from "../components/Vision";

export const DynamicComponentWithNoSSR = dynamic(() => import("../components/Menu"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <>
      <section className="container m-auto p-2">
        <DynamicComponentWithNoSSR />
      </section>
      <Banner />
      <section className="container mt-10 m-auto p-2">
        <div className="grid md:grid-cols-1 gap-4 items-center">
          <div className="intro">
            <div className="mb-4">
              <span className="font-bahnschrift text-green-400 text-xl">
                A Leaf
              </span>
      
            </div>

            <p className="text-base mb-4 text-gray-100 font-nunito leading-loose">
              É uma editora de livros infantis e juvenis que oferece aos seus leitores um mundo de fantasia e
              diversão. Nossos livros são repletos de personagens inesquecíveis e histórias que farão você
              rir, chorar e se apaixonar. Também publicamos livros que interessam os educadores e os farão
              pensar em suas práticas, proporcionando a fotossíntese através do conhecimento.
            </p>
          </div>
        </div>
      </section>
      <Vision />
      <Values />
      <Footer />
    </>
  );
};

export default Home;


