import type { NextPage } from "next";
import dynamic from "next/dynamic";

import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Values from "../components/Values";
import { Vision } from "../components/Vision";

const DynamicComponentWithNoSSR = dynamic(() => import("../components/Menu"), {
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
        <div className="grid md:grid-cols-2 gap-4 items-center">
          <div className="flex items-start">
            <img src="picture1.png" alt="" className="object-cover" />
          </div>
          <div className="intro">
            <div className="mb-4">
              <span className="font-bahnschrift text-green-400 text-sm">
                A Leaf
              </span>
              <h2 className="text-black-100 font-bold font-nunito text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est a
                imperdiet id lobortis.
              </h2>
            </div>

            <p className="text-base mb-4 text-gray-100 font-nunito leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus
              risus nulla pharetra etiam odio cursus. Pulvinar sit cum malesuada
              nisl sed. Quis eros malesuada venenatis nec convallis egestas
              nibh. Sit elementum nulla ac in lacus aenean venenatis.
            </p>

            <p className=" text-base text-gray-100 font-nunito leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus
              risus nulla pharetra etiam odio cursus. Pulvinar sit cum malesuada
              nisl sed. Quis eros malesuada venenatis nec convallis egestas
              nibh. Sit elementum nulla ac in lacus aenean venenatis.
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
