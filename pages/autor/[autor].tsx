import React from "react";
import { DynamicComponentWithNoSSR } from "..";
import Footer from "../../components/Footer";
import { Intro } from "../../components/Intro";

function Autor() {
  return (
    <>
      <section className="container m-auto p-2">
        <DynamicComponentWithNoSSR />
      </section>
      <Intro title="Autor" />
      <div className="container m-auto">
        <main className=" grid grid-cols-1 md:grid-cols-2 items-start gap-10 mt-20">
          <img
            src="../aline.jpg"
            alt=""
            className="object-cover h-full w-full rounded-md  "
          />

          <div>
            <h2 className="font-bahnschrift text-green-400 text-4xl  mt-5">
              Aline Reis
            </h2>
            <p className="text-base text-gray-100 font-nunito leading-loose mt-5">
              nam delectus facere impedit quam officia numquam dignissimos illo.
              Eaque optio saepe hic vitae provident. Delectus quos fugit
              asperiores voluptate molestiae! aque optio saepe hic vitae
              provident. Delectus quos fugit asperiores voluptate molestiae!
              aque optio saepe hic vitae provident. Delectus quos fugit
              asperiores voluptate molestiae! aque optio saepe hic vitae
              provident. Delectus quos fugit asperiores voluptate molestiae!
            </p>
          </div>
        </main>

        <section>
          <h2 className="font-bahnschrift text-black-100 text-4xl  mt-16">
            Livros da Autora
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <img src="../book.jpg" alt="" className="h-full w-full mt-8" />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Autor;
