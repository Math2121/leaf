import Link from "next/link";
import { DynamicComponentWithNoSSR } from ".";
import Footer from "../components/Footer";
import { Intro } from "../components/Intro";

function Contato() {
  return (
    <>
      <section className="container m-auto p-2">
        <DynamicComponentWithNoSSR />
      </section>
      <Intro title="Autores" />
      <div className="container m-auto">
        <main className=" grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
          <div className="w-full group">
            <Link href="/autor/1">
              <img
                src="aline.jpg"
                alt=""
                className="object-cover h-full w-full rounded-md filter grayscale group-hover:grayscale-0 transition-all duration-200 cursor-pointer" loading="lazy"
              />
            </Link>
            <h2 className="font-bahnschrift text-green-400 text-xl text-center mt-5">
              Aline Reis
            </h2>
          </div>

          <div className="w-full group">
            <Link href="#">
              <img
                src="aline.jpg"
                alt=""
                className="object-cover h-full w-full rounded-md filter grayscale group-hover:grayscale-0 transition-all duration-200 cursor-pointer" loading="lazy"
              />
            </Link>
            <h2 className="font-bahnschrift text-green-400 text-xl text-center mt-5">
              Aline Reis
            </h2>
          </div>


          <div className="w-full group">
            <Link href="#">
              <img
                src="aline.jpg"
                alt=""
                className="object-cover h-full w-full rounded-md filter grayscale group-hover:grayscale-0 transition-all duration-200 cursor-pointer" loading="lazy"
              />
            </Link>
            <h2 className="font-bahnschrift text-green-400 text-xl text-center mt-5">
              Aline Reis
            </h2>
          </div>

          <div className="w-full group mt-5">
            <Link href="#">
              <img
                src="aline.jpg"
                alt=""
                className="object-cover h-full w-full rounded-md filter grayscale group-hover:grayscale-0 transition-all duration-200 cursor-pointer" loading="lazy"
              />
            </Link>
            <h2 className="font-bahnschrift text-green-400 text-xl text-center mt-5">
              Aline Reis
            </h2>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Contato;
